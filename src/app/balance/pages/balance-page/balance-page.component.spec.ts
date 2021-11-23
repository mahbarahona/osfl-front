import { ComponentFixture, TestBed } from '@angular/core/testing';
import { map } from 'rxjs/operators';
import { BalanceItem } from '../../models/balance-item.model';
import { BalanceStoreService } from '../../store/balance.store';

import { BalancePageComponent } from './balance-page.component';

describe('BalancePageComponent', () => {
  let component: BalancePageComponent;
  let fixture: ComponentFixture<BalancePageComponent>;
  let store: BalanceStoreService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalancePageComponent ],
      providers:[BalanceStoreService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });


  
  describe('CRUD items',()=>{

    it('agregar item',()=>{

      const item:BalanceItem = {
         titulo:'prueba 1',
         descripcion:'',
         fecha_evento:'',
         numero_documento:'',
         monto:0,
         tipo:'',
         es_donacion: false,
      }
      let itemsStore:BalanceItem[] = []
      let getItem;
      let itemFromStore;

      store.balance$
      .pipe(
        map( balance => balance.items)
      )
      .subscribe(items => itemsStore = items )

      store.addItem(item)

      itemFromStore = itemsStore.find(i => i == item)
 
      console.log({getItem})
      console.log({itemFromStoreArray: itemFromStore})
      // expect store
      // deberia estar en la lista de items del store
      // find item


      //probar ui
      expect(itemFromStore).toEqual(item)  
    })

    it('editar item',()=>{

    })
    it('eliminar item',()=>{

    })

  })

  describe('datos organizacion',()=>{
    it(' agregar nombre de la organizacion',()=>{})
    it(' editar nombre de la organizacion',()=>{})

    it(' agregar fecha balance',()=>{})
    it(' editar fecha balance',()=>{})

  })

  // it('',()=>{})




  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
