import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-asociar-contrato',
  templateUrl: './asociar-contrato.component.html',
  styleUrls: ['./asociar-contrato.component.css'],
})
export class AsociarContratoComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  vigencias: any[] = [
    { value: '2023', viewValue: '2023' },
    { value: '2024', viewValue: '2024' },
    { value: '2025', viewValue: '2025' },
  ];
  consecutivo: any[] = [
    { value: '1234', viewValue: '1234' },
  ];
  isLoading = false;
  private subscription: Subscription | null = null;
  selectedContratoId: string | null = null;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      vigencia: ['', Validators.required],
      consecutivo: ['', Validators.required]
    });

    const consecutivoControl = this.form.get('consecutivo');
    if (consecutivoControl) {
      this.subscription = consecutivoControl.valueChanges.subscribe(value => {
        if (value) {
          console.log('Contrato ID seleccionado:', value);
          this.selectedContratoId = value.toString();
        } else {
          this.selectedContratoId = null;
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
