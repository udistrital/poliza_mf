import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import {VisualizarPolizaComponent} from "./visualizar-poliza.component";

@NgModule({
  declarations: [VisualizarPolizaComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports: [VisualizarPolizaComponent]
})
export class VisualizarPolizaModule { }
