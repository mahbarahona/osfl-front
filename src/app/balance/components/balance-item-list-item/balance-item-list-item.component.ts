import { Component, Input, OnInit } from '@angular/core';
import { BalanceItem } from '../../models/balance-item.model';
import { BalanceStoreService } from '../../store/balance.store';

@Component({
  selector: 'app-balance-item-list-item',
  templateUrl: './balance-item-list-item.component.html',
  styleUrls: ['./balance-item-list-item.component.scss']
})
export class BalanceItemListItemComponent implements OnInit {

  @Input() item = new BalanceItem
  @Input() index = -1

  constructor(private store:BalanceStoreService) { }

  ngOnInit(): void {
  }

  seleccionarItem(){
    this.store.seleccionarItem(this.index)
  }

}
