import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/main-links', pathMatch: 'full' },
  { path: 'main-links', loadComponent: () => import('./components/main-links/main-links').then(m => m.MainLinks) },
];
