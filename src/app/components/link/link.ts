import { Component, input } from '@angular/core';
import { Button } from 'primeng/button';

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

}
