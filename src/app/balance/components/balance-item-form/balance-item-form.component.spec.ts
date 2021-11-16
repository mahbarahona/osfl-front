import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceItemFormComponent } from './balance-item-form.component';

describe('BalanceItemFormComponent', () => {
  let component: BalanceItemFormComponent;
  let fixture: ComponentFixture<BalanceItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
