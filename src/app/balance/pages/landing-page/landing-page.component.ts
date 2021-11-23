import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/navigation/navigation.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private nav:NavigationService) { }

  ngOnInit(): void {
  }

  comenzar(){
    this.nav.ir('/balance/item')
  }


}
