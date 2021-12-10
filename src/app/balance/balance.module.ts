import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';
import { BalancePageComponent } from './pages/balance-page/balance-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BalanceItemListItemComponent } from './components/balance-item-list-item/balance-item-list-item.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { BalanceStoreService } from './store/balance.store';
import { BalanceRepositoryService } from './repository/balance-repository.service';
import { BalanceService } from './controller/balance.service';
import { SharedModule } from '../shared/shared.module';
import { DatosOrganizacionComponent } from './components/datos-organizacion/datos-organizacion.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';



@NgModule({
  declarations: [
    BalancePageComponent,
    BalanceItemListItemComponent,
    ItemPageComponent,
    DatosOrganizacionComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    BalanceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    BalanceStoreService,
    BalanceRepositoryService,
    BalanceService
  ]
})
export class BalanceModule { }
