import { Component, EventEmitter } from '@angular/core';
import { DynamicComponent } from 'app/components/models/dynamic-component';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent implements DynamicComponent {
  message: string;

  triggered$: EventEmitter<string>;
  constructor() {
    this.triggered$ = new EventEmitter<string>();
  }

  onSubmit() {
    this.triggered$.emit("Hello World Bootstrap from Child Component");
  }

}
