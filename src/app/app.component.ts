import { Component } from '@angular/core';
import { FixerCurrencyAPIService } from './fixer-currency-api.service';
import { getRate } from './valuty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rezult: number = -1;
  val1_input: number=0;
  kurs!: number;

  
    from:string="";
    to:string="";

      setFrom(from:string):void{
            this.from = from;
            this.kurs=getRate(this.from, this.to);
            this.rezult = -1;
            this.onClick();
      }

      setTo(to:string):void{
            this.to = to;
            this.kurs=getRate(this.from, this.to);
            this.rezult = -1;
            this.onClick();
      }

  onClick():void{
    //this.rezult = this.val1_input*this.kurs;
        if(this.from != '' && this.to != '' && this.val1_input)  {
      this.serviceAPI.getConvert(this.from, this.to, this.val1_input);  
    }
  }

  testAPI(){    
    //this.serviceAPI.getConvert("USD", "UAH",  5);  
    if(this.from != '' && this.to != '' && this.val1_input)  {
      this.serviceAPI.getConvert(this.from, this.to, this.val1_input);  
    }
  }


  constructor(public serviceAPI:FixerCurrencyAPIService) { }


  title = 'Kurs_Valut';
  
}
