import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HomeComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
