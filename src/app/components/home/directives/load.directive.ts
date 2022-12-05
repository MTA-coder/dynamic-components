import { Directive, ComponentRef, Input, OnChanges, SimpleChanges, Type, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { DynamicComponent } from 'app/components/models/dynamic-component';
import { ThemeTemplate } from 'app/components/models/theme';
import { BootstrapComponent } from '../themes/bootstrap/bootstrap.component';
import { IonicComponent } from '../themes/ionic/ionic.component';

@Directive({
  selector: '[appLoad]'
})
export class LoadDirective implements OnChanges {

  @Input() theme: ThemeTemplate;
  @Input() message: string;

  @Output() submitted: EventEmitter<string>;

  private _componentRef: ComponentRef<DynamicComponent>;
  constructor(public _viewContainerRef: ViewContainerRef) {
    this.submitted = new EventEmitter<string>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.theme?.currentValue || changes.message?.currentValue) {
      this.loadComponent(changes.theme?.currentValue);
    }
  }

  loadComponent(theme: ThemeTemplate) {
    this._viewContainerRef.clear();
    this._componentRef = this._viewContainerRef.createComponent<DynamicComponent>(this.componentTypeFactory(theme));
    this._componentRef.instance.message = this.message;
    this._componentRef.instance.triggered$.subscribe((val: string) => this.submitted.emit(val));
  }

  private componentTypeFactory(type: ThemeTemplate): Type<DynamicComponent> {
    let comp: Type<DynamicComponent>;
    if (type === ThemeTemplate.Bootstrap)
      comp = BootstrapComponent;
    else
      comp = IonicComponent;
    return comp;
  }

}
