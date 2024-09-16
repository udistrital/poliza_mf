import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PolizasService} from "../../../services/polizas.service";

@Component({
  selector: 'app-datos-basicos',
  templateUrl: './datos-basicos.component.html',
  styleUrls: ['./datos-basicos.component.css']
})
export class DatosBasicosComponent implements OnInit {

  polizaForm: FormGroup = this.createForm();

  entidadesAseguradoras: any[] = [
    {
      name: 'Entidad 1',
      id: 1,
    },{
    name: 'Entidad 2',
      id: 2,
    },{
    name: 'Entidad 3',
      id: 3,
    }
  ];

  constructor(
    private fb: FormBuilder,
    private polizasService: PolizasService
  ) {}

  ngOnInit() {
  }

  private createForm(): FormGroup {
    return this.fb.group({
      numero_poliza: ['', Validators.required],
      fecha_inicio: [null, Validators.required],
      fecha_fin: [null, Validators.required],
      fecha_expedicion: [null, Validators.required],
      fecha_aprobacion: [null, Validators.required],
      entidad_aseguradora_id: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.polizaForm.valid) {
      this.polizasService.postPoliza(this.polizaForm.value).subscribe({
          next: response => {
            console.log('Póliza guardada exitosamente', response);
          },
          error: error => {
            console.error('Error al guardar la póliza', error);
          }
        }
      );
    }
  }
}
