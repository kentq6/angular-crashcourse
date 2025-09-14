import { Routes } from '@angular/router';

export const routes: Routes = [
  // Lazy Loading with dynamic imports
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home').then(m => m.Home);
    },
  },
  {
    path: 'todos',
    loadComponent: () => {
      return import ('./todos/todos').then(m => m.Todos);
    }
  },
];
