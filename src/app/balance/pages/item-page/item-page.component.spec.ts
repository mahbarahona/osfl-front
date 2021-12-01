import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BalanceStoreService } from '../../store/balance.store';

import { ItemPageComponent } from './item-page.component';

describe('ItemPageComponent', () => {
  let component: ItemPageComponent;
  let fixture: ComponentFixture<ItemPageComponent>;
  let store:BalanceStoreService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPageComponent ],
      imports:[RouterTestingModule, ReactiveFormsModule, FormsModule],
      providers:[BalanceStoreService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    store = new BalanceStoreService()
    fixture = TestBed.createComponent(ItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
