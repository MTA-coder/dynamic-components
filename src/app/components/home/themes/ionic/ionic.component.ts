import { Component } from '@angular/core';
import { DynamicComponent } from 'app/components/models/dynamic-component';

@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.component.html',
  styleUrls: ['./ionic.component.scss']
})
export class IonicComponent implements DynamicComponent {
  message: string;

  constructor() { }
}
