import { Component } from '@angular/core';
import { DynamicComponent } from 'app/components/models/dynamic-component';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent implements DynamicComponent {
  message: string;

  constructor() {

  }
}
