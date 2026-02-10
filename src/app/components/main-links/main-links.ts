import { Component, DOCUMENT, Inject, OnInit, signal } from '@angular/core';
import { Link } from "../link/link";
import { ILinks, ThemeMode } from '../../models';
import { Search } from '../search/search';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { LinksService, RecentLinksService } from '../../Shared';
import { FormsModule } from '@angular/forms';

const THEME_STORAGE_KEY = 'rxlinks-theme';

@Component({
  selector: 'app-main-links',
  imports: [Link, Search, ToggleButtonModule, ButtonModule, FormsModule],
  templateUrl: './main-links.html',
  styleUrl: './main-links.scss'
})
export class MainLinks implements OnInit {

  currentMode = signal<string>(ThemeMode.LIGHT);
  checked = signal(false);

  originalLinks = signal<ILinks[]>([]);

  links = signal<ILinks[]>([]);

  noResults = signal(false);

  recentLinks = signal<ILinks[]>([]);

  /** Category names that are currently collapsed (content hidden). */
  collapsedCategories = signal<Set<string>>(new Set());

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private linksService: LinksService,
    private recentLinksService: RecentLinksService
  ) { }

  ngOnInit() {
    // Initialize theme from storage or system preference
    this.initializeTheme();
    // Load recent links from storage
    this.recentLinks.set(this.recentLinksService.getRecentLinks());
    // Load links from JSON
    this.linksService.getLinks().subscribe(links => {
      this.originalLinks.set(links);
      this.links.set(links);
    });
  }

  onLinkUsed(link: ILinks): void {
    this.recentLinksService.addRecentLink(link);
    this.recentLinks.set(this.recentLinksService.getRecentLinks());
  }

  private initializeTheme(): void {
    const stored = this.document.defaultView?.localStorage?.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
    const prefersDark = this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const mode = stored ?? (prefersDark ? ThemeMode.DARK : ThemeMode.LIGHT);

    this.currentMode.set(mode);
    this.checked.set(mode === ThemeMode.DARK);
    this.applyBodyClass(mode);
  }

  private applyBodyClass(mode: string): void {
    this.document.body.classList.remove(ThemeMode.LIGHT, ThemeMode.DARK);
    this.document.body.classList.add(mode);
  }

  get categories() {
    // Get unique category names
    return [...new Set(this.links().map(link => link.category))];
  }

  linksByCategory(category: string) {
    return this.links().filter(link => link.category === category);
  }

  onSearchValueChange(searchKey: string) {
    if (!searchKey) {
      this.noResults.set(false);
      return this.links.set(this.originalLinks());
    }

    const key = searchKey.toLowerCase();
    const filteredLinks = this.originalLinks().filter(link =>
      link.title.toLowerCase().includes(key) ||
      link.category.toLowerCase().includes(key) ||
      link.url.toLowerCase().includes(key)
    );

    this.links.set(filteredLinks);
    this.noResults.set(filteredLinks.length === 0);
  }


  onThemeToggle(event: { checked: boolean }): void {
    const mode = event.checked ? ThemeMode.DARK : ThemeMode.LIGHT;
    this.currentMode.set(mode);
    this.checked.set(event.checked);
    this.applyBodyClass(mode);
    this.document.defaultView?.localStorage?.setItem(THEME_STORAGE_KEY, mode);
  }

  onClearRecent(): void {
    this.recentLinksService.clearRecentLinks();
    this.recentLinks.set([]);
  }

  isCategoryCollapsed(category: string): boolean {
    return this.collapsedCategories().has(category);
  }

  toggleCategory(category: string): void {
    const next = new Set(this.collapsedCategories());
    if (next.has(category)) {
      next.delete(category);
    } else {
      next.add(category);
    }
    this.collapsedCategories.set(next);
  }

  expandAll(): void {
    this.collapsedCategories.set(new Set());
  }

  collapseAll(): void {
    this.collapsedCategories.set(new Set(this.categories));
  }
}
