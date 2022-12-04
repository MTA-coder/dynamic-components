import { Directive, Input, OnChanges, SimpleChanges, Type, ViewContainerRef } from '@angular/core';
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

  constructor(public viewContainerRef: ViewContainerRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.theme?.currentValue || changes.message?.currentValue) {
      this.loadComponent(changes.theme?.currentValue);
    }
  }

  loadComponent(theme: ThemeTemplate) {
    this.viewContainerRef.clear();
    const comRef = this.viewContainerRef.createComponent<DynamicComponent>(this.componentTypeFactory(theme));
    comRef.instance.message = this.message;
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
