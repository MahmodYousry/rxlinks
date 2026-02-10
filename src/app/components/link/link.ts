import { Component, effect, input, output, signal } from '@angular/core';

/** Link health: 'up' = green (default/ok), 'down' = red (unreachable). */
export type LinkStatus = 'up' | 'down';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.html',
  styleUrl: './link.scss',
  standalone: true,
})
export class Link {
  title = input<string>('');
  url = input<string>();
  target = input<string>('_blank');
  icon = input<string>('');

  /** Emits when the user clicks the link (before navigation). */
  linkClick = output<void>();

  /** Health check result: green (up) by default, red (down) if check fails. */
  status = signal<LinkStatus>('up');

  constructor() {
    effect(() => {
      const u = this.url();
      if (u) this.checkHealth(u);
    });
  }

  onLinkClick(): void {
    this.linkClick.emit();
  }

  /** Check link URL via CORS proxy; if that fails, try favicon as fallback. Red only when both fail. */
  private checkHealth(urlStr: string): void {
    const delay = Math.floor(Math.random() * 300);
    window.setTimeout(() => this.doCheck(urlStr), delay);
  }

  private doCheck(urlStr: string): void {
    try {
      const url = new URL(urlStr);
      if (!/^https?:$/i.test(url.protocol)) return;

      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(urlStr)}`;
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 10000);

      fetch(proxyUrl, { method: 'GET', signal: controller.signal, mode: 'cors' })
        .then((res) => {
          window.clearTimeout(timeoutId);
          const ok = res.status >= 200 && res.status < 400;
          if (ok) {
            this.status.set('up');
          } else {
            this.tryFaviconFallback(urlStr);
          }
        })
        .catch(() => {
          window.clearTimeout(timeoutId);
          // Proxy failed (timeout, block, rate limit) – try favicon before marking red
          this.tryFaviconFallback(urlStr);
        });
    } catch {
      this.status.set('down');
    }
  }

  /** If proxy check failed, try loading origin favicon; set up only if it loads (reduces false reds). */
  private tryFaviconFallback(urlStr: string): void {
    try {
      const url = new URL(urlStr);
      const faviconUrl = `${url.origin}/favicon.ico`;
      const img = new Image();
      const timeoutId = window.setTimeout(() => {
        img.src = '';
      }, 5000);
      img.onload = () => {
        window.clearTimeout(timeoutId);
        this.status.set('up');
      };
      img.onerror = () => {
        window.clearTimeout(timeoutId);
        this.status.set('down');
      };
      img.src = faviconUrl;
    } catch {
      this.status.set('down');
    }
  }
}
