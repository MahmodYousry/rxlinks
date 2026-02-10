import { Component, input, output } from '@angular/core';

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

  onLinkClick(): void {
    this.linkClick.emit();
  }
}
