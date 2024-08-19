import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AsociarContratoComponent } from './asociar-contrato/asociar-contrato.component';
import { AmparoContratoComponent } from './amparo-contrato/amparo-contrato.component';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { RegistroPolizaComponent } from './registro-poliza.component';

import { ParametrosService } from 'src/app/services/parametros.service';
import { RequestManager } from 'src/app/managers/requestManager';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {DatosBasicosComponent} from "./datos-basicos/datos-basicos.component";



@NgModule({
  declarations: [
    RegistroPolizaComponent,
    AsociarContratoComponent,
    AmparoContratoComponent,
    DatosBasicosComponent,
    AsociarContratoComponent,
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    NgFor,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers:[
    ParametrosService,
    RequestManager
  ]
})
export class RegistroPolizaModule { }
