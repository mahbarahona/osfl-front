import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceItemListItemComponent } from './balance-item-list-item.component';

describe('BalanceItemListItemComponent', () => {
  let component: BalanceItemListItemComponent;
  let fixture: ComponentFixture<BalanceItemListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceItemListItemComponent ]
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
});
