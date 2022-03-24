import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name = 'Breno Gomes';
  age = 27;
  job = 'Desenvolvedor de software';
  hobbie = ['Viajar', 'Dormir', 'Assistir jogos'];
  car = {
    name: 'Uno',
    year: '2014'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
