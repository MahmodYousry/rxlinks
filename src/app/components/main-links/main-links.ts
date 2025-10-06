import { Component, DOCUMENT, effect, Inject, signal } from '@angular/core';
import { Link } from "../link/link";
import { ILinks, ThemeMode } from '../../models';
import { Search } from '../search/search';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { LinksService } from '../../Shared';
@Component({
  selector: 'app-main-links',
  imports: [Link, Search, ToggleButtonModule],
  templateUrl: './main-links.html',
  styleUrl: './main-links.scss'
})
export class MainLinks {

  currentMode = signal<string>(ThemeMode.LIGHT);
  checked = signal(false);

  originalLinks = signal<ILinks[]>([]);

  links = signal<ILinks[]>([]);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private linksService: LinksService
  ) { }

  ngOnInit() {
    // Initialize links with the original links
    this.originalLinks.set(this.linksService.getLinks());
    this.links.set(this.originalLinks());
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
      return this.links.set(this.originalLinks());
    }

    const filteredLinks = this.originalLinks().filter(link =>
      link.title.toLowerCase().includes(searchKey.toLowerCase()) ||
      link.category.toLowerCase().includes(searchKey.toLowerCase())
    );

    this.links.set(filteredLinks);

    if (filteredLinks.length === 0) {
      this.links.set([{ title: 'No results found', url: '', img: '', category: '' }]);
    }
  }


  toggleMode() {
    this.document.body.classList.toggle(ThemeMode.LIGHT);
    this.document.body.classList.toggle(ThemeMode.DARK);
    if (this.currentMode() === ThemeMode.LIGHT) {
      this.updateCurrentMode(ThemeMode.DARK);
    } else {
      this.updateCurrentMode(ThemeMode.LIGHT);
    }
  }

  updateCurrentMode(mode: string) {
    this.currentMode.set(mode);
  }


}
