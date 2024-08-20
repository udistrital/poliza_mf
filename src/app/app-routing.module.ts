import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroPolizaComponent } from './modules/registro-poliza/registro-poliza.component';

const routes: Routes = [
  {
    path:"registrar-poliza",
    component: RegistroPolizaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
