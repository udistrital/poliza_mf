import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface Contrato {
  contratoId: string;
  tienePoliza: boolean;
  amparos: string[];
}

@Component({
  selector: 'app-visualizar-polizas',
  template: `
    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
      <!-- Contrato ID Column -->
      <ng-container matColumnDef="contratoId">
        <th mat-header-cell *matHeaderCellDef> Contrato ID </th>
        <td mat-cell *matCellDef="let element"> {{element.contratoId}} </td>
      </ng-container>

      <!-- Tiene Poliza Column -->
      <ng-container matColumnDef="tienePoliza">
        <th mat-header-cell *matHeaderCellDef> Tiene Póliza </th>
        <td mat-cell *matCellDef="let element"> {{element.tienePoliza ? 'Sí' : 'No'}} </td>
      </ng-container>

      <!-- Amparos Column -->
      <ng-container matColumnDef="amparos">
        <th mat-header-cell *matHeaderCellDef> Amparos </th>
        <td mat-cell *matCellDef="let element"> {{element.amparos.join(', ')}} </td>
      </ng-container>

      <!-- Detalles Column -->
      <ng-container matColumnDef="detalles">
        <th mat-header-cell *matHeaderCellDef> Acciones </th>
        <td mat-cell *matCellDef="let element">
          <button mat-raised-button color="primary" (click)="verDetalles(element)">
            Ver Detalles
          </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `,
  styles: [`
    table {
      width: 100%;
      margin-top: 20px;
    }
  `]
})
export class VisualizarPolizaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<Contrato>;

  private contratos: Contrato[] = [
    {
      contratoId: '2024-001',
      tienePoliza: true,
      amparos: ['Fuerza Mayor', 'Daños', 'Uso Indebido']
    },
    {
      contratoId: '2024-002',
      tienePoliza: false,
      amparos: []
    },
    {
      contratoId: '2024-003',
      tienePoliza: true,
      amparos: ['Fuerza Mayor', 'Daños']
    }
  ];

  displayedColumns: string[] = ['contratoId', 'tienePoliza', 'amparos', 'detalles'];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Contrato>(this.contratos);
    this.dataSource.paginator = this.paginator;
  }

  verDetalles(contrato: Contrato): void {
    console.log('Ver detalles del contrato:', contrato);
  }
}
