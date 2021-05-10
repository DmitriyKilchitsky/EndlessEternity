import { Component, Input } from '@angular/core';
import { Item } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  @Input() item: Item;
}
