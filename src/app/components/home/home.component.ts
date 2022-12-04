import { Component } from '@angular/core';
import { ThemeTemplate } from '../models/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  theme: string;
  constructor() {
    this.theme = ThemeTemplate.Bootstrap;
  }
}
