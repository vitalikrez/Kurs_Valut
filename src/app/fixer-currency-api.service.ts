import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RezultAPI } from './rezultAPI';


@Injectable({
  providedIn: 'root'
})
export class FixerCurrencyAPIService {

  convert!:any;
  symbols!:any;

  constructor(private http:HttpClient) { }

getSymbols(){

  const options = {
  method: 'GET',
  url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/symbols',
  headers: {
    'X-RapidAPI-Key': 'X-RapidAPI-Key',
    'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com'
  }
};
  let rez:any = this.http.get(options.url, options);
  let tmp = rez.subscribe((data: any)=>{this.symbols = Object.keys(data.valueOf().symbols); console.log(this.symbols)});
return rez;  
}


getConvert(from:string, to:string, amount:number){
  const options = {  method: 'GET', 
   url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/convert',
     params: {amount: amount, to: to, from: from},  headers: 
     {  
        'X-RapidAPI-Key': 'X-RapidAPI-Key',   
   'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com'
  }};

  let rez:any = this.http.get(options.url, options).subscribe(data=> {this.convert = data;  console.log(this.convert);});  
  return rez;  


}

}
