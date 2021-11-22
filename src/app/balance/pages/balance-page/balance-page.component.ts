import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter} from 'rxjs/operators'
import { BalanceStoreService } from '../../store/balance.store';

@Component({
  selector: 'app-balance-page',
  templateUrl: './balance-page.component.html',
  styleUrls: ['./balance-page.component.scss']
})
export class BalancePageComponent implements OnInit,OnDestroy {

  nombre_organizacion= new FormControl('',[Validators.required])
  fecha_balance= new FormControl('',[Validators.required])

  subs$:Subscription = new Subscription

  constructor( public store:BalanceStoreService) { }

  ngOnInit(): void {    
    
    this.subs$.add (
      this.nombre_organizacion.valueChanges
      .pipe(
        filter( () => this.nombre_organizacion.valid)
      )
      .subscribe( nombre =>this.store.setNombreOrganizacion(nombre)))

    this.subs$.add (
      this.fecha_balance.valueChanges
      .pipe(
        filter( () => this.fecha_balance.valid)
      )
      .subscribe( fecha => this.store.setFechaBalance(fecha)))
  }
  ngOnDestroy(){
    this.subs$?.unsubscribe()
  }
  

  deleteItem(index:number){
      this.store.deleteItem(index)
  }


}
