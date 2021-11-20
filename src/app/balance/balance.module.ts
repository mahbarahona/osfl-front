import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';
import { BalancePageComponent } from './pages/balance-page/balance-page.component';
import { BalanceItemListComponent } from './components/balance-item-list/balance-item-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BalanceItemListItemComponent } from './components/balance-item-list-item/balance-item-list-item.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { BalanceStoreService } from './store/balance.store';
import { BalanceRepositoryService } from './repository/balance-repository.service';
import { BalanceService } from './controller/balance.service';



@NgModule({
  declarations: [
    BalancePageComponent,
    BalanceItemListComponent,
    BalanceItemListItemComponent,
    ItemPageComponent
  ],
  imports: [
    CommonModule,
    BalanceRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    BalanceStoreService,
    BalanceRepositoryService,
    BalanceService
  ]
})
export class BalanceModule { }
