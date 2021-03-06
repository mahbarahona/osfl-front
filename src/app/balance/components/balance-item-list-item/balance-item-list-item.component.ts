import {  Component,  Input } from '@angular/core';
import { BalanceItem } from '../../models/balance-item.model';

@Component({
  selector: 'app-balance-item-list-item',
  templateUrl: './balance-item-list-item.component.html',
  styleUrls: ['./balance-item-list-item.component.scss']
})
export class BalanceItemListItemComponent  {

  
  @Input() item:BalanceItem = new BalanceItem
  @Input() index = -1
  

}
