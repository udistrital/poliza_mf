import { NgModule } from '@angular/core';
import {provideRouter, RouterModule, Routes} from '@angular/router';
import { RegistroPolizaComponent } from './modules/registro-poliza/registro-poliza.component';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {getSingleSpaExtraProviders} from "single-spa-angular";
import {APP_BASE_HREF} from "@angular/common";
import {VisualizarPolizaModule} from "./modules/visualizar-poliza/visualizar-poliza.module";
import {VisualizarPolizaComponent} from "./modules/visualizar-poliza/visualizar-poliza.component";

const routes: Routes = [
  {
    path:"registrar",
    component: RegistroPolizaComponent
  },
  {
    path:"listado",
    component: VisualizarPolizaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes),
    { provide: APP_BASE_HREF, useValue: '/polizas/' },
    getSingleSpaExtraProviders(),
    provideHttpClient(withFetch()),
  ],
})
export class AppRoutingModule { }
