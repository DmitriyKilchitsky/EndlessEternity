import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Hero {
  rank: number;
  name: string;
  description: string;
  power: number;
  hp: number;
  damage: number;
  chance: number;
  position?: string;
  ratio: number;
  price: number;
}

export interface Item {
  rank: number;
  name: string;
  percentage: number;
  description: string;
  debuff: string;
  level: string;
  mana: number;
  points: number;
}

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  collection: QueryDocumentSnapshot<any>[];

  constructor(private store: AngularFirestore) {}

  getHeroCollection(collectionName: string) {
    return this.store.collection(collectionName).get() as Observable<
      QuerySnapshot<Hero>
    >;
  }

  getItemCollection(collectionName: string) {
    return this.store.collection(collectionName).get() as Observable<
      QuerySnapshot<Item>
    >;
  }
}
