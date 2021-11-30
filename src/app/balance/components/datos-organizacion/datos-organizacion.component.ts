import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {  map, tap } from 'rxjs/operators';
import { BalanceStoreService } from '../../store/balance.store';

@Component({
  selector: 'app-datos-organizacion',
  templateUrl: './datos-organizacion.component.html',
  styleUrls: ['./datos-organizacion.component.scss']
})
export class DatosOrganizacionComponent implements OnInit {

  nombre_organizacion = new FormControl('',[Validators.required])
  fecha_balance       = new FormControl(this.getDefaultDate(),[Validators.required])
  subs$:Subscription  = new Subscription

  constructor( public store:BalanceStoreService) { }

  ngOnInit(): void {    
    this.subs$.add(
      this.store.balance$
      .pipe(
        tap(balance => console.log({balance})),
        map(balance =>  {
          
            return {
              nombre_organizacion: balance.nombre_organizacion,
              fecha_balance:balance.fecha_balance
            }
        })
      )
      .subscribe( data =>{
        this.nombre_organizacion.setValue(data.nombre_organizacion)
        if(data.fecha_balance) this.fecha_balance.setValue(data.fecha_balance)
        
      })
    )
  }
  ngOnDestroy(){
    this.subs$?.unsubscribe()
  }

  private getDefaultDate(){
    const dt = new Date()
    const year = dt.getFullYear()
    const month = dt.getMonth()
    return `${year}-${month}`
  }


}
