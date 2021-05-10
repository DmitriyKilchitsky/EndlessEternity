import { Component, Input, OnInit } from '@angular/core';
import { ItemsTitles } from 'src/app/constants/titles';
import { FirebaseService, Item } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnInit {
  @Input() collectionName: string;

  items: Item[] = [];

  constructor(private firebaseService: FirebaseService) {}

  get title() {
    return ItemsTitles[this.collectionName];
  }

  ngOnInit(): void {
    this.firebaseService
      .getItemCollection(this.collectionName)
      .subscribe((querySnapshot) => {
        this.items = querySnapshot.docs.map((itemQuery) => {
          return itemQuery.data();
        });
      });
  }
}
