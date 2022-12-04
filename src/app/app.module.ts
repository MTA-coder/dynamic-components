import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BootstrapComponent } from './components/home/themes/bootstrap/bootstrap.component';
import { IonicComponent } from './components/home/themes/ionic/ionic.component';
import { LoadDirective } from './components/home/directives/load.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BootstrapComponent,
    IonicComponent,
    LoadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
