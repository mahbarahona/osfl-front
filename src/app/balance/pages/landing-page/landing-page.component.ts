import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/core/navigation/navigation.service';
import { BalanceStoreService } from '../../store/balance.store';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  nombre_organizacion = new FormControl('',[Validators.required])



  constructor(
    public store:BalanceStoreService,
    private nav:NavigationService) { }

  ngOnInit(): void {
  }

  comenzar(){
    this.nav.ir('/balance/item')
  }


}
