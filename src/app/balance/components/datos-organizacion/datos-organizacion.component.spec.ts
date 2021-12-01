import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalanceStoreService } from '../../store/balance.store';

import { DatosOrganizacionComponent } from './datos-organizacion.component';

describe('DatosOrganizacionComponent', () => {
  let component: DatosOrganizacionComponent;
  let fixture: ComponentFixture<DatosOrganizacionComponent>;
  let store:BalanceStoreService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosOrganizacionComponent ],
      providers:[BalanceStoreService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    store = new BalanceStoreService()
    fixture = TestBed.createComponent(DatosOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
