import { Component, Input, OnInit } from '@angular/core';
import { HeroesTitles } from 'src/app/constants/titles';
import { FirebaseService, Hero } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent implements OnInit {
  @Input() collectionName: string;

  heroes: Hero[] = [];

  constructor(private firebaseService: FirebaseService) {}

  get title() {
    return HeroesTitles[this.collectionName];
  }

  ngOnInit(): void {
    this.firebaseService
      .getHeroCollection(this.collectionName)
      .subscribe((querySnapshot) => {
        this.heroes = querySnapshot.docs.map((heroQuery) => {
          return heroQuery.data();
        });
      });
  }
}
