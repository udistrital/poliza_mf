import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroActasModule } from './modules/registro-actas/registro-actas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistroActasModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
