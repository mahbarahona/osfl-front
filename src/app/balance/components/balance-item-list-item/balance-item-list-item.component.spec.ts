import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { BalanceItemListItemComponent } from './balance-item-list-item.component';

fdescribe('BalanceItemListItemComponent', () => {
  let component: BalanceItemListItemComponent;
  let fixture: ComponentFixture<BalanceItemListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceItemListItemComponent ],
      imports:[SharedModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceItemListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test routerLink
  
  describe('UI',()=>{
    describe('Mostrar item: ',()=>{
      describe('TITULO',()=>{
          it('si recibe item con titulo, muestra el titulo entregado',()=>{
            //given
            const tituloEL = fixture.debugElement.query(By.css('[data-test="titulo"]'))

            //when
            const titulo = 'titulo de prueba'
            component.item = {
              titulo,
              descripcion:'',
              fecha_evento:'',
              numero_documento:'',
              monto:100,
              tipo:'1',//ingreso
              es_donacion:false,
            }
            
            //then
            fixture.detectChanges()            
            expect(tituloEL.nativeElement.textContent).toEqual(titulo)
          })
          it('si recibe item sin titulo, muestra texto vacio',()=>{
            //given
            const tituloEL = fixture.debugElement.query(By.css('[data-test="titulo"]'))

            
            //when
            component.item = {
              titulo:'',
              descripcion:'',
              fecha_evento:'',
              numero_documento:'',
              monto:100,
              tipo:'1',//ingreso
              es_donacion:false,
            }
            fixture.detectChanges()            
            //then
            expect(tituloEL.nativeElement.textContent).toEqual('')
          })
      })
      describe('DESCRIPCION',()=>{

        it('si recibe item sin descripcion, muestra texto vacio',()=>{
          //given
          const descripcionEl = fixture.debugElement.query(By.css('[data-test="descripcion"]'))

          
          //when
          component.item = {
            titulo:'',
            descripcion:'',
            fecha_evento:'',
            numero_documento:'',
            monto:100,
            tipo:'1',//ingreso
            es_donacion:false,
          }
          fixture.detectChanges()            
          //then
          expect(descripcionEl.nativeElement.textContent).toEqual('')
        })
        it(`si recibe item con descripcion, de menos de 25 caracteres,
             muestra la descripcion del item`,()=>{
              //given
              const descipcionEl = fixture.debugElement.query(By.css('[data-test="descripcion"]'))

              //when
              const descripcion = '123456789012345678901234'
              component.item = {
                titulo:'',
                descripcion,
                fecha_evento:'',
                numero_documento:'',
                monto:100,
                tipo:'1',//ingreso
                es_donacion:false,
              }
              
              //then
              fixture.detectChanges()            
              expect(descipcionEl.nativeElement.textContent).toEqual(descripcion)
        })
        it(`si recibe item con descripcion, de 25 caracteres,
            muestra la descripcion del item`,()=>{
            //given
            const descipcionEl = fixture.debugElement.query(By.css('[data-test="descripcion"]'))

            //when
            const descripcion = '1234567890123456789012345'
            const descripcionExpected = `${descripcion}...`

            component.item = {
              titulo:'',
              descripcion,
              fecha_evento:'',
              numero_documento:'',
              monto:100,
              tipo:'1',//ingreso
              es_donacion:false,
            }
            
            //then
            fixture.detectChanges()            
            expect(descipcionEl.nativeElement.textContent).toEqual(descripcionExpected)
        })
        it(`si recibe item con descripcion, con mas de 25 caracteres,
            muestra la descripcion del item`,()=>{
            //given
            const descripcionEl = fixture.debugElement.query(By.css('[data-test="descripcion"]'))

            //when
            const descripcion = '123456789012345678901234567890123412345'
            const descripcionExpected = `${descripcion.slice(0,25)}...`
            component.item = {
              titulo:'',
              descripcion,
              fecha_evento:'',
              numero_documento:'',
              monto:100,
              tipo:'1',//ingreso
              es_donacion:false,
            }
            
            //then
            fixture.detectChanges()            
            expect(descripcionEl.nativeElement.textContent).toEqual(descripcionExpected)
        })
      })
      describe('FECHA',()=>{
        it('si recibe item con fecha, muestra fecha entregada',()=>{
          //given
          const fechaEl = fixture.debugElement.query(By.css('[data-test="fecha"]'))

          //when
          const fecha = '11/30/21'
          component.item = {
            titulo: fecha,
            descripcion:'',
            fecha_evento: new Date('11/30/2021').toString(),
            numero_documento:'',
            monto:100,
            tipo:'1',//ingreso
            es_donacion:false,
          }
          
          //then
          fixture.detectChanges()            
          expect(fechaEl.nativeElement.textContent).toEqual(fecha)
        })
        it('si recibe item sin fecha, muestra texto vacio',()=>{
          //given
          const tituloEL = fixture.debugElement.query(By.css('[data-test="fecha"]'))

          
          //when
          component.item = {
            titulo:'',
            descripcion:'',
            fecha_evento:'',
            numero_documento:'',
            monto:100,
            tipo:'1',//ingreso
            es_donacion:false,
          }
          fixture.detectChanges()            
          //then
          expect(tituloEL.nativeElement.textContent).toEqual('')
        })

      })
      describe('MONTO',()=>{
        describe('mostrar monto',()=>{
          it('si recibe item con monto, muestra monto',()=>{
            //given
            const descripcionEl = fixture.debugElement.query(By.css('[data-test="monto"]'))

            
            //when
            component.item = {
              titulo:'',
              descripcion:'',
              fecha_evento:'',
              numero_documento:'',
              monto:100,
              tipo:'1',//ingreso
              es_donacion:false,
            }
            fixture.detectChanges()            
            //then
            expect(descripcionEl.nativeElement.textContent).toEqual(' 100 ')
          })
        })
        describe('formato',()=>{
          it('si el monto es igual o menor a 999, muestra monto sin separadores',()=>{
            const montoEl = fixture.debugElement.query(By.css('[data-test="monto"]'))

            //given
            component.item = {
              titulo:'',
              descripcion:'',
              fecha_evento:'',
              numero_documento:'',
              monto:999,
              tipo:'1',//ingreso
              es_donacion:false,
            }
            //then
            fixture.detectChanges()  
            expect(montoEl.nativeElement.textContent).toEqual(' 999 ')
          })
          it('si el monto es igual o menor a 1 mil - 99mil, muestra monto con separador de mil',()=>{
            const montoEl = fixture.debugElement.query(By.css('[data-test="monto"]'))

            //given
            component.item = {
              titulo:'',
              descripcion:'',
              fecha_evento:'',
              numero_documento:'',
              monto:99000,
              tipo:'1',//ingreso
              es_donacion:false,
            }
            //then
            fixture.detectChanges()  
            expect(montoEl.nativeElement.textContent).toEqual(' 99.000 ')
          })
          it('si el monto es igual o menor a 1 millon - 999 millones, muestra monto con separador de millon',()=>{
            const montoEl = fixture.debugElement.query(By.css('[data-test="monto"]'))

            //given
            component.item = {
              titulo:'',
              descripcion:'',
              fecha_evento:'',
              numero_documento:'',
              monto:999000123,
              tipo:'1',//ingreso
              es_donacion:false,
            }
            //then
            fixture.detectChanges()  
            expect(montoEl.nativeElement.textContent).toEqual(' 999.000.123 ')
          })
        })
        describe('item ingreso',()=>{

          it('muestra el monto con el prefijo "+" ',()=>{
            //given
            const montoEl = fixture.debugElement.query(By.css('[data-test="monto"]'))
          
            //when
            component.item = {
              titulo:'',
              descripcion:'',
              fecha_evento:'',
              numero_documento:'',
              monto:100,
              tipo:'1',//ingreso
              es_donacion:false,
            }
            //then
            fixture.detectChanges()
            let content = window.getComputedStyle(montoEl.nativeElement,':before').getPropertyValue('content')
            expect(content).toEqual('"+ "')
          })
    
          it('el monto se muestra de color verde',()=>{
            //given
            const montoEl = fixture.debugElement.query(By.css('[data-test="monto"]'))
            component.item = {
              titulo:'',
              descripcion:'',
              fecha_evento:'',
              numero_documento:'',
              monto:100,
              tipo:'1',//ingreso
              es_donacion:false,
            }
            //then
            fixture.detectChanges()
            expect(montoEl.nativeElement.classList).toContain('ingreso')
          })
        })
        describe('item egreso',()=>{
    
          it('muestra el monto con el prefijo "-" ',()=>{
            const montoEl = fixture.debugElement.query(By.css('[data-test="monto"]'))
          
            //when
            component.item = {
              titulo:'',
              descripcion:'',
              fecha_evento:'',
              numero_documento:'',
              monto:100,
              tipo:'0',//egreso
              es_donacion:false,
            }
            //then
            fixture.detectChanges()
            let content = window.getComputedStyle(montoEl.nativeElement,':before').getPropertyValue('content')
            expect(content).toEqual('"- "')
          })
          it('el monto se muestra de color gris',()=>{
            //given
            const montoEl = fixture.debugElement.query(By.css('[data-test="monto"]'))
            //when
            component.item = {
              titulo:'',
              descripcion:'',
              fecha_evento:'',
              numero_documento:'',
              monto:100,
              tipo:'0',//egreso
              es_donacion:false,
            }
            
            //then
            fixture.detectChanges()
            expect(montoEl.nativeElement.classList).toContain('egreso')
          })
        })
      })
    });





  })


});
