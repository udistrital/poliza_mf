import { Injectable } from '@angular/core';
import { RequestManager } from '../managers/requestManager';
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GestionContractualService {

  constructor(private requestManager: RequestManager) {
    this.requestManager.setPath('GESTION_CONTRACTUAL_CRUD_SERVICE');
  }

  getContratosPorVigencia(year: string | null): Observable<any> {
    this.requestManager.setPath('GESTION_CONTRACTUAL_CRUD_SERVICE');
    return this.requestManager.get(`contratos-generales/vigencia/${year}`).pipe(
      catchError(error => {
        if (error.status === 400 || error.status === 404) {
          return throwError(() => ({
            status: error.status,
            message: 'No se encontraron contratos para esta vigencia'
          }));
        }
        return throwError(() => error);
      })
    );
  }

}
