import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceItemListComponent } from './balance-item-list.component';

describe('BalanceItemListComponent', () => {
  let component: BalanceItemListComponent;
  let fixture: ComponentFixture<BalanceItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
