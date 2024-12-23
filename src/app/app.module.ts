import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ParametrosService } from './services/parametros.service';
import { RequestManager } from './managers/requestManager';
import { RegistroPolizaModule } from './modules/registro-poliza/registro-poliza.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpinnerIntercerptor } from './core/intercerptors/spinner.interceptor';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AppComponent, SpinnerComponent],
  imports: [
    RegistroPolizaModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    ParametrosService,
    RequestManager,
    provideHttpClient(withInterceptors([SpinnerIntercerptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
