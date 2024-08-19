import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


export interface RowData {
  vigencia: string;
  num_sol_adq: string;
  numero_disponibilidad: string;
  valor_contratacion: number | string;
  nombre_dependencia: string;
  descripcion: string;
  estado: string;
}

@Component({
  selector: 'app-asociar-contrato',
  templateUrl: './asociar-contrato.component.html',
  styleUrls: ['./asociar-contrato.component.css'],
})


export class AsociarContratoComponent {

  form = this._formBuilder.group({
    vigencia: ['', Validators.required],
    cdp: ['', Validators.required],
    valorAcumulado: [{value: 0, disabled: true}, Validators.required],
    tipoMoneda: ['', Validators.required],
    valorContrato: ['', Validators.required],
    resolucion: [''],
    ordenadorGasto: ['', Validators.required],
    nombreOrdenador: ['', Validators.required],
    tipoGasto: ['', Validators.required],
    origenRecurso: ['', Validators.required],
    origenPresupuesto: ['', Validators.required],
    temaGasto: ['', Validators.required],
    monedaExtranjera: ['', Validators.required],
    tasaCambio: ['', Validators.required],
    medioPago: ['', Validators.required],
  });




  vigencias: any[] = [
    { value: '2023', viewValue: '2023' },
    { value: '2024', viewValue: '2024' },
    { value: '2025', viewValue: '2025' },
  ];

  cdps: any[] = [];


  isLoading = false;

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }


}
