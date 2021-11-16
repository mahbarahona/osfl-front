import { Component, OnInit } from '@angular/core';
import { BalanceStoreService } from '../../store/balance.store';

@Component({
  selector: 'app-balance-item-list',
  templateUrl: './balance-item-list.component.html',
  styleUrls: ['./balance-item-list.component.scss']
})
export class BalanceItemListComponent implements OnInit {

  constructor(public store:BalanceStoreService) { }

  ngOnInit(): void {
    
  }

}
