import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'balance',
    loadChildren: ()=> import('./balance/balance.module').then(m=>m.BalanceModule)
  },
  {
    path:'',
    redirectTo:'balance',
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
