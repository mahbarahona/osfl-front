import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BalanceItem } from '../models/balance-item.model';
import { Balance } from '../models/balance.model';

@Injectable({
  providedIn: 'root'
})
export class BalanceStoreService {

  private _balanceSource = new BehaviorSubject<Balance>(new Balance)
  public balance$ = this._balanceSource.asObservable()

  private _itemActualSource = new BehaviorSubject<BalanceItemActual>(new BalanceItemActual)
  public itemActual$ = this._itemActualSource.asObservable()
  
  private _showFormSource = new BehaviorSubject<boolean>(false)
  public showForm$ = this._showFormSource.asObservable()
  

  constructor() { }


  
  setNombreOrganizacion(nombre:string){
    const balance = this._balanceSource.getValue()
    this._balanceSource.next(
      {...balance,
        nombre_organizacion:nombre
      })

    console.log({state:this._balanceSource.getValue()})
  }
  setFechaBalance(fecha:string){
    const balance = this._balanceSource.getValue()
    this._balanceSource.next(
      {...balance,
        fecha_balance:fecha
      })
    console.log({state:this._balanceSource.getValue()})

  }
  
  //CRUD ITEMS
  addItem(item:BalanceItem){
    this.resetItemSeleccionado()
    const balance = this._balanceSource.getValue()
    const items = [...balance.items,item]
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
    this.hideForm()
  }
  updateItem(index:number,newItem:BalanceItem){
    this.resetItemSeleccionado()

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

    this.hideForm()
  }
  deleteItem(index:number){
    this.resetItemSeleccionado()

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

    this.hideForm()

  }

  //ITEM SELECCIONADO
  seleccionarItem(index:number){
    const item = this._balanceSource.getValue().items[index]
    this._itemActualSource.next({
      item,
      index
    })
    this.showForm()
    
    console.log({state:{
      balance:this._balanceSource.getValue(),
      itemActual:this._itemActualSource.getValue(),
    }})
  }
  resetItemSeleccionado(){
    this._itemActualSource.next({
     item: new BalanceItem,
     index: -1
    })
  }

  //FORM
  showForm(){
    this._showFormSource.next(true)
  }
  hideForm(){
    this._showFormSource.next(false)
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
  private getItemsByTipo(items:BalanceItem[], tipo:number){
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
  EGRESOS=0,
  INGRESOS=1
}


export class BalanceItemActual{
  item:BalanceItem = new BalanceItem
  index:number = -1
}


