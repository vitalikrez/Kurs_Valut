import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RezultAPI } from './rezultAPI';


@Injectable({
  providedIn: 'root'
})
export class FixerCurrencyAPIService {

  
  constructor(private http:HttpClient) { }


Convert(from:string, to:string, amount:number): RezultAPI{


  const options = {
    params: {amount: '12', to: 'ILS', from: 'USD'},
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com'
    }
  };

  let rez:any = this.http.get('https://fixer-fixer-currency-v1.p.rapidapi.com/convert', options);

  let tmp = new RezultAPI();
  tmp.rate = rez.info.rate;
  tmp.rezult = rez.rezult;
  tmp.success = rez.success;
  return tmp;

} 

}
