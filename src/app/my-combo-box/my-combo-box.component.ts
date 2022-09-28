import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { getRate, ITEMS } from '../valuty';
import { FixerCurrencyAPIService } from '../fixer-currency-api.service';


@Component({
  selector: 'app-my-combo-box',
  templateUrl: './my-combo-box.component.html',
  styleUrls: ['./my-combo-box.component.css']
})
export class MyComboBoxComponent implements OnInit {


  inputItem: string="";
  itemList: string[] = ITEMS;
  selectedIndex: number=-1;

  @Input() name:string="";

  @Input() list: string[]=[];

  @Output() onItemSelected = new EventEmitter<string>();

  listHovaemo:boolean=true;

  selectItem(index:number):void{
    this.selectedIndex = index;
    this.inputItem = this.serviceAPI.symbols[index];
    this.listHovaemo = true;
    this.onItemSelected.emit(this.serviceAPI.symbols[index]);
  }

  constructor(public serviceAPI:FixerCurrencyAPIService) { }

  ngOnInit(): void {

    this.serviceAPI.getSymbols();

  }

  onChange(): void {

    let test = this.serviceAPI.symbols.indexOf(this.inputItem);
    if (test)
      this.selectItem(test);
    }
  

}
