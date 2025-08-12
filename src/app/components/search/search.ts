import { Component, output, signal } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-search',
  imports: [IconFieldModule, InputIconModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
  standalone: true
})
export class Search {

  searchKey = signal<string>('');
  searchValue = output<string>();

  onSeachChange(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    this.searchKey.set(searchValue);
    this.searchValue.emit(searchValue);
  }

}
