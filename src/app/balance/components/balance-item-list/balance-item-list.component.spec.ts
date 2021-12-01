import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalanceStoreService } from '../../store/balance.store';

import { BalanceItemListComponent } from './balance-item-list.component';

describe('BalanceItemListComponent', () => {
  let component: BalanceItemListComponent;
  let fixture: ComponentFixture<BalanceItemListComponent>;
  let store:BalanceStoreService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceItemListComponent ],
      providers:[BalanceStoreService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    store = new BalanceStoreService()
    fixture = TestBed.createComponent(BalanceItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
