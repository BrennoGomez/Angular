import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name: "Pluto", type: "Dog", age: 2},
    {name: "Rambo", type: "Dog", age: 5},
    {name: "Felino", type: "Cat", age: 4},
    {name: "Mangalarga", type: "Horse", age: 12},
  ]

  animalDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) : void {
    this.animalDetails = `O ${animal.type} ${animal.name} tem ${animal.age} anos de idade!`
  }

}
