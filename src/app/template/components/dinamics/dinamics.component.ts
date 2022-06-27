import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}


@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html'
})
export class DinamicsComponent implements OnInit {

  newFav: string = '';
  person: Person = {
    name: 'David',
    favorites: [
      { id: 1, name: 'Metal Gear' },
      { id: 2, name: 'DeathStranding' }
    ],
  }

  constructor() { }
  ngOnInit(): void { }

  save() {
    console.log('post successfully');
  }
  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }
  add() {
    const id = this.getNewID();
    const fav: Favorite = {
      id: id,
      name: this.newFav
    }
    this.person.favorites.push(fav);
    this.newFav = '';
  }
  getNewID() {
    let lastID = 0;
    this.person.favorites.forEach(fav => {
      if (fav.id > lastID) {
        lastID = fav.id;
      }
    });
    lastID++;
    return lastID;
  }
}
