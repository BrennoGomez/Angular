import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() course: string = '';
  @Input() dataCourse!: {year: number, level: string};

  constructor() { }

  ngOnInit(): void {
  }

}
