import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';
import {GestionContractualService} from "../../../services/gestionContractual.service";

@Component({
  selector: 'app-asociar-contrato',
  templateUrl: './asociar-contrato.component.html',
  styleUrls: ['./asociar-contrato.component.css'],
})
export class AsociarContratoComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  vigencias: any[] = [
    { value: '2024', viewValue: '2024' },
    { value: '2025', viewValue: '2025' },
  ];
  consecutivo: any[] = [];
  isLoading = false;
  private subscriptions: Subscription[] = [];
  selectedContratoId: string | null = null;
  hasError = false;

  constructor(
    private fb: FormBuilder,
    private gestionContractualService: GestionContractualService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initForm();
    this.setupVigenciaSubscription();
  }

  private initForm() {
    this.form = this.fb.group({
      vigencia: ['', Validators.required],
      consecutivo: ['', Validators.required]
    });

    const consecutivoControl = this.form.get('consecutivo');
    if (consecutivoControl) {
      this.subscriptions.push(
        consecutivoControl.valueChanges.subscribe(value => {
          this.hasError = false;
          if (value) {
            console.log('Contrato ID seleccionado:', value);
            this.selectedContratoId = value.toString();
          } else {
            this.selectedContratoId = null;
          }
        })
      );
    }
  }

  private setupVigenciaSubscription() {
    const vigenciaControl = this.form.get('vigencia');
    if (vigenciaControl) {
      this.subscriptions.push(
        vigenciaControl.valueChanges.subscribe(value => {
          if (value) {
            this.loadContratos(value);
          } else {
            this.consecutivo = [];
            this.form.get('consecutivo')?.setValue('');
            this.hasError = false;
          }
        })
      );
    }
  }

  private loadContratos(year: string) {
    this.isLoading = true;
    this.consecutivo = [];
    this.form.get('consecutivo')?.setValue('');
    this.hasError = false;

    this.gestionContractualService.getContratosPorVigencia(year).subscribe({
      next: (response) => {
        if (response.Success && response.Data) {
          this.consecutivo = response.Data.map((id: number) => ({
            value: id.toString(),
            viewValue: id.toString()
          }));
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar contratos:', error);
        this.isLoading = false;
        this.hasError = true;
        this.showErrorMessage(error.message || 'Error al cargar los contratos');
      }
    });
  }

  private showErrorMessage(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
