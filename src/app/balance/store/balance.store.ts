import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BalanceItem } from '../models/balance-item.model';
import { Balance } from '../models/balance.model';

@Injectable()
export class BalanceStoreService {

  private _balanceSource = new BehaviorSubject<Balance>(new Balance)
  public balance$ = this._balanceSource.asObservable()

  constructor() { }


  //PREFERENCES
  getLastTipoItem(){
    const items = this._balanceSource.getValue().items
    console.log({items})

    if(items && items.length > 0 ) return items[0].tipo 
    return '1'
  }

  getItemByIndex(index:string){
    const i  = parseInt(index)
    const items = this._balanceSource.getValue().items
    return items[i]
  }
  setNombreOrganizacion(nombre:string){
    const balance = this._balanceSource.getValue()
    this._balanceSource.next(
      {...balance,
        nombre_organizacion:nombre
      })

  }
  setFechaBalance(fecha:string){
    const balance = this._balanceSource.getValue()
    this._balanceSource.next(
      {...balance,
        fecha_balance:fecha
      })

  }
  
  //CRUD ITEMS
  addItem(item:BalanceItem){
    
    const balance = this._balanceSource.getValue()
    const items = [item,...balance.items]
    const { totalIngresos,totalEgresos,saldo,cantidadIngresos,cantidadEgresos} = this.calcularMontos(items)


    this._balanceSource.next({
      ...balance,
      items,
      totalIngresos,
      totalEgresos,
      saldo,
      cantidadIngresos,
      cantidadEgresos
    })

  }
  updateItem(index:number,newItem:BalanceItem){
    

    const balance = this._balanceSource.getValue()
    const items = balance.items.map((item, i)=> i === index ? newItem : item)
    const { totalIngresos,totalEgresos,saldo,cantidadIngresos,cantidadEgresos} = this.calcularMontos(items)


    this._balanceSource.next({
      ...balance,
      items,
      totalIngresos,
      totalEgresos,
      saldo,
      cantidadIngresos,
      cantidadEgresos
    })


  }
  deleteItem(index:number){

    const balance = this._balanceSource.getValue()
    const items = balance.items.filter( (item, i)=> i !== index)
    const { totalIngresos,totalEgresos,saldo,cantidadIngresos,cantidadEgresos} = this.calcularMontos(items)


    this._balanceSource.next({
      ...balance,
      items,
      totalIngresos,
      totalEgresos,
      saldo,
      cantidadIngresos,
      cantidadEgresos
    })
  }

 

  private calcularMontos(items:BalanceItem[]){

    const itemsIngresos = this.getItemsByTipo(items, TiposDeEvento.INGRESOS)
    const itemsEgresos = this.getItemsByTipo(items, TiposDeEvento.EGRESOS)

    const cantidadIngresos = this.getCantidadItems(itemsIngresos)
    const cantidadEgresos  = this.getCantidadItems(itemsEgresos)

    const totalIngresos = this.sumarItems(itemsIngresos)
    const totalEgresos  = this.sumarItems(itemsEgresos)
    const saldo = totalIngresos - totalEgresos


   return {
     totalIngresos,
     totalEgresos,
     saldo,
     cantidadIngresos,
     cantidadEgresos
   }
  }
  private getCantidadItems(items:BalanceItem[]){
    return items.length
  }
  private getItemsByTipo(items:BalanceItem[], tipo:string){
    return items.filter(i => i.tipo === tipo)
  }
  private sumarItems(items:BalanceItem[]){
    return items.reduce(this.sumar, 0);
  }
  private sumar(accumulator:number, a:BalanceItem) {
    return accumulator + a.monto;
  }
}

export enum TiposDeEvento{
  EGRESOS='0',
  INGRESOS='1'
}


