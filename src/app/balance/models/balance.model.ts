import { BalanceItem } from "./balance-item.model";

export class Balance{

    nombre_organizacion:string = ''
    fecha_balance:string = ''
    items:BalanceItem[] = []

    saldo:number = 0
    totalIngresos:number = 0
    totalEgresos:number = 0
    cantidadIngresos:number = 0
    cantidadEgresos:number = 0
  }
  