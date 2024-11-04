import { Routes } from '@angular/router';
import { SearchComponent } from './components/header/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { EditComponent } from './components/home/edit/edit.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'add',
    loadComponent: () =>
      import('../../src/app/components/header/add/add.component').then(
        (c) => c.AddComponent
      ),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('../app/components/home/edit/edit.component').then(
        (c) => c.EditComponent
      ),
  },
];
