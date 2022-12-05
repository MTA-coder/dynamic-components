import { Component, EventEmitter } from '@angular/core';
import { DynamicComponent } from 'app/components/models/dynamic-component';

@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.component.html',
  styleUrls: ['./ionic.component.scss']
})
export class IonicComponent implements DynamicComponent {
  message: string;

  triggered$: EventEmitter<string>;
  constructor() {
    this.triggered$ = new EventEmitter<string>();
  }

  onSubmit() {
    this.triggered$.emit("Hello World Ionic from Child Component");
  }

}
