import { Injectable } from '@angular/core';
import { RequestManager } from '../managers/requestManager';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PolizasMidService {

  constructor(private requestManager: RequestManager) {
    this.requestManager.setPath('POLIZAS_CRUD_SERVICE');
  }

  getAmparos(id: string | null): Observable<any> {
    this.requestManager.setPath('POLIZAS_MID_SERVICE');
    return this.requestManager.get(`amparos-contratos/${id}`);
  }
}
