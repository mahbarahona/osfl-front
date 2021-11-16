import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';
import { BalancePageComponent } from './pages/balance-page/balance-page.component';
import { BalanceItemFormComponent } from './components/balance-item-form/balance-item-form.component';
import { BalanceItemListComponent } from './components/balance-item-list/balance-item-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BalanceItemListItemComponent } from './components/balance-item-list-item/balance-item-list-item.component';



@NgModule({
  declarations: [
    BalancePageComponent,
    BalanceItemFormComponent,
    BalanceItemListComponent,
    BalanceItemListItemComponent
  ],
  imports: [
    CommonModule,
    BalanceRoutingModule,
    ReactiveFormsModule
  ]
})
export class BalanceModule { }
