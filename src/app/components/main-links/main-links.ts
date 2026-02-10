import { Component, DOCUMENT, Inject, OnInit, signal } from '@angular/core';
import { Link } from "../link/link";
import { ILinks, ThemeMode } from '../../models';
import { Search } from '../search/search';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { LinksService } from '../../Shared';
import { FormsModule } from '@angular/forms';

const THEME_STORAGE_KEY = 'rxlinks-theme';

@Component({
  selector: 'app-main-links',
  imports: [Link, Search, ToggleButtonModule, FormsModule],
  templateUrl: './main-links.html',
  styleUrl: './main-links.scss'
})
export class MainLinks implements OnInit {

  currentMode = signal<string>(ThemeMode.LIGHT);
  checked = signal(false);

  originalLinks = signal<ILinks[]>([]);

  links = signal<ILinks[]>([]);

  noResults = signal(false);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private linksService: LinksService
  ) { }

  ngOnInit() {
    // Initialize theme from storage or system preference
    this.initializeTheme();
    // Load links from JSON
    this.linksService.getLinks().subscribe(links => {
      this.originalLinks.set(links);
      this.links.set(links);
    });
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

    const filteredLinks = this.originalLinks().filter(link =>
      link.title.toLowerCase().includes(searchKey.toLowerCase()) ||
      link.category.toLowerCase().includes(searchKey.toLowerCase())
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


}
