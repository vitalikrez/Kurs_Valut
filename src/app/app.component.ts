import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rezult: number = -1;
  val1_input: number=0;
  kurs: number=40;

  onClick():void{

    this.rezult = this.val1_input*this.kurs;

  }

  title = 'Kurs_Valut';
}
