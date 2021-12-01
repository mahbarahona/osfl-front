import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BalanceStoreService } from '../../store/balance.store';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let store:BalanceStoreService
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ],
      imports:[RouterTestingModule],
      providers:[BalanceStoreService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    store = new BalanceStoreService()
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('',()=>{
    it('al completar su nombre, se envia al usuario para que agregue un nuevo registro',()=>{
      //set input value
      //triger enter
      //enviar a la pagina de nuevo registro
      //***Validar
    })
    it('al querer agregar un nuevo registro, se envia al usuario para que agregue un nuevo registro',()=>{
      //trigger click
      const button = fixture.debugElement.query(By.css('[data-test="btn_nuevo-registro"]'))
      button.triggerEventHandler('click',null)



      //enviar a la pagina de nuevo registro
      //***Validar
    })
  })
});
