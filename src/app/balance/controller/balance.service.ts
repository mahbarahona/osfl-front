import { Injectable } from '@angular/core';
import { BalanceItem } from '../models/balance-item.model';

@Injectable()
export class BalanceService {

  constructor() { }

  setNombreOrganizacion(nombre:string){}
  setFechaBalance(fecha:string){}

  getItemByIndex(index:number){}
  addItem(item:BalanceItem){}
  updateItem(index:number, newItem:BalanceItem){}
  deleteItem(index:number){}

}
