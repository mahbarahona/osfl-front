import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/core/navigation/navigation.service';
import { BalanceStoreService } from '../../store/balance.store';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  frm: FormGroup = new FormGroup({})
  esAgregar: boolean = true
  index:number = -1
  

  constructor(
    private route:ActivatedRoute,
    private nav:NavigationService,
    private fb: FormBuilder,
    public store: BalanceStoreService) {}
  
  //FORM CONTROLS
  get titulo(){
    return this.frm.get('titulo');
  }
  get descripcion(){
    return this.frm.get('descripcion');
  }
  get monto(){
    return this.frm.get('monto');
  }
  get fecha_evento(){
    return this.frm.get('fecha_evento');
  }
  get numero_documento(){
    return this.frm.get('numero_documento');
  }

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('id') || ''
    this.frm = this.getInitialForm()

     if(index)
     {
       const item = this.store.getItemByIndex(index)
       if(!item) {
         this.volver()
         return 
        }
       this.index = parseInt(index)
       this.frm.setValue(item)
       this.esAgregar = false
     }

  }
  

    addItem() {
    this.store.addItem(this.frm.value)
    this.volver()
  }
  updateItem(){
    this.store.updateItem(this.index, this.frm.value)
    this.volver()
  }
  deleteItem() {
    this.store.deleteItem(this.index)
    this.volver()
  }


  volver(){
    this.nav.ir('/balance/home')
  }
  private getInitialForm() {
    return this.fb.group({
      titulo: ['Saldo anterior', Validators.required],
      descripcion: ['Saldo del mes de Octubre', Validators.required],
      monto: [65000, Validators.required],
      fecha_evento: [new Date(), Validators.required],
      numero_documento: ['abc123', Validators.required],
      tipo: ['1', Validators.required],
      es_donacion: [false, []]
    })
  }

}
