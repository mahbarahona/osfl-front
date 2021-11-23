import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalancePageComponent } from './pages/balance-page/balance-page.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent
  },
  {
    path:'home',
    component:BalancePageComponent
  },
  {
    path:'item',
    component:ItemPageComponent
  },
  {
    path:'item/:id',
    component:ItemPageComponent
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceRoutingModule { }
