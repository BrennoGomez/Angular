import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals = [
    {name: "Pluto", type: "Dog"},
    {name: "Rambo", type: "Dog"},
    {name: "Felino", type: "Cat"},
    {name: "Mangalarga", type: "Horse"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
