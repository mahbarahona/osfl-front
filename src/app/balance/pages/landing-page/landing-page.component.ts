import { AfterViewInit, Component, ElementRef,  ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/core/navigation/navigation.service';
import { BalanceStoreService } from '../../store/balance.store';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements AfterViewInit {

  @ViewChild('nombre') nombre:ElementRef = new ElementRef('')
  nombre_organizacion = new FormControl('',[Validators.required])



  constructor(
    public store:BalanceStoreService,
    private nav:NavigationService) { }

  ngAfterViewInit(): void {
    this.nombre.nativeElement.focus()
  }


  comenzar(){
    this.nav.ir('/balance/item')
  }


}
