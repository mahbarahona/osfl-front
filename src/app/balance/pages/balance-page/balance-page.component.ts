import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { filter, map, tap} from 'rxjs/operators'
import { BalanceStoreService } from '../../store/balance.store';

@Component({
  selector: 'app-balance-page',
  templateUrl: './balance-page.component.html',
  styleUrls: ['./balance-page.component.scss']
})
export class BalancePageComponent implements OnInit,OnDestroy {

  nombre_organizacion = new FormControl('',[Validators.required])
  fecha_balance       = new FormControl('',[Validators.required])
  subs$:Subscription = new Subscription

  constructor( public store:BalanceStoreService) { }

  ngOnInit(): void {    
    this.subs$.add(
      this.store.balance$
      .pipe(
        filter(balance => balance.nombre_organizacion !== '' ),
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
        this.fecha_balance.setValue(data.fecha_balance)
      })
    )
  }
  ngOnDestroy(){
    this.subs$?.unsubscribe()
  }
  

  deleteItem(index:number){
      this.store.deleteItem(index)
  }


}
