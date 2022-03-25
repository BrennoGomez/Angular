import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courseName = 'Angular 13';

  dataCourse = {
    year: 2022,
    level: 'Intermediário'
  }

  title = 'curso-angular';
}
