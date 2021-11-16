import { Component,  OnInit,} from '@angular/core';
import {  FormBuilder,  FormGroup,  Validators} from '@angular/forms';

import { BalanceItem} from '../../models/balance-item.model';
import {  BalanceStoreService} from '../../store/balance.store';

@Component({
  selector: 'app-balance-item-form',
  templateUrl: './balance-item-form.component.html',
  styleUrls: ['./balance-item-form.component.scss']
})
export class BalanceItemFormComponent implements OnInit {

  frm: FormGroup = this.fb.group({})
  esAgregar: boolean = false
  index:number = -1

  constructor(private fb: FormBuilder, private store: BalanceStoreService) {}

  ngOnInit(): void {
    
    this.store.itemActual$
    .subscribe(data => {
      this.frm = this.setForm(data.item)
      this.index = data.index
      this.esAgregar = this.index === -1 ? true : false
    }
    )
    this.frm = this.getInitialForm()
  }


  addItem() {
    if (this.frm.invalid) return

    this.frm.patchValue({
      tipo: parseInt(this.frm.get('tipo')?.value)
    })
    this.store.addItem(this.frm.value)
    this.resetForm()
  }
  updateItem(){
    if (this.frm.invalid) return

    this.frm.patchValue({
      tipo: parseInt(this.frm.get('tipo')?.value)
    })
    this.store.updateItem(this.index, this.frm.value)
    // this.resetForm()
    this.store.resetItemSeleccionado()
  }
  deleteItem() {
    this.store.deleteItem(this.index)
    this.store.resetItemSeleccionado()
  }

  private getInitialForm() {
    return this.fb.group({
      titulo: ['compra de bolsas de regalo', Validators.required],
      descripcion: ['se compran bolsas para evento de navidad', Validators.required],
      monto: [1000, Validators.required],
      fecha_evento: [new Date(), Validators.required],
      numero_documento: ['111111', Validators.required],
      tipo: ['1', Validators.required],
      es_donacion: [false, []]
    })
  }
  private setForm(item:BalanceItem){
    return this.fb.group({
      titulo: [item.titulo, Validators.required],
      descripcion: [item.descripcion, Validators.required],
      monto: [item.monto, Validators.required],
      fecha_evento: [item.fecha_evento, Validators.required],
      numero_documento: [item.numero_documento, Validators.required],
      tipo: [item.tipo.toString(), Validators.required],
      es_donacion: [item.es_donacion, []]
    })
  }
  private resetForm() {
    this.frm.reset()
    this.frm.patchValue({
      tipo:'1',
      es_donacion: false
    })
  }

}
