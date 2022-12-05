import { EventEmitter } from "@angular/core";

export interface DynamicComponent {
  message: string;
  triggered$: EventEmitter<string>;

  onSubmit(): void;
}
