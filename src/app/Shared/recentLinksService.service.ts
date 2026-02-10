import { Injectable } from '@angular/core';
import { ILinks } from '../models';

const RECENT_STORAGE_KEY = 'rxlinks-recent';
const MAX_RECENT = 8;

@Injectable({
  providedIn: 'root'
})
export class RecentLinksService {

  constructor() { }

  getRecentLinks(): ILinks[] {
    if (typeof window === 'undefined' || !window.localStorage) {
      return [];
    }
    try {
      const raw = window.localStorage.getItem(RECENT_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as ILinks[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  addRecentLink(link: ILinks): void {
    if (!link?.url || typeof window === 'undefined' || !window.localStorage) return;
    const recent = this.getRecentLinks();
    const filtered = recent.filter((item) => item.url !== link.url);
    const updated = [link, ...filtered].slice(0, MAX_RECENT);
    window.localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(updated));
  }

  clearRecentLinks(): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    window.localStorage.removeItem(RECENT_STORAGE_KEY);
  }
}
