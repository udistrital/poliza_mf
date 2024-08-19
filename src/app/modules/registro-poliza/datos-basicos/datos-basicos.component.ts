import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-basicos',
  templateUrl: './datos-basicos.component.html',
  styleUrls: ['./datos-basicos.component.css']
})
export class DatosBasicosComponent implements OnInit {
  polizaForm: FormGroup = this.createForm();

  entidadesAseguradoras: string[] = ['Entidad 1', 'Entidad 2', 'Entidad 3'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  private createForm(): FormGroup {
    return this.fb.group({
      numeropoliza: ['', Validators.required],
      fechaInicial: [null, Validators.required],
      fechaFinal: [null, Validators.required],
      fechaExpedicion: [null, Validators.required],
      fechaAprobacion: [null, Validators.required],
      entidadAseguradora: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.polizaForm.valid) {
      console.log(this.polizaForm.value);
    }
  }
}
