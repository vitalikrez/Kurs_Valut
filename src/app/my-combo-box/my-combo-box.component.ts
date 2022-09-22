import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { getRate, ITEMS } from '../valuty';

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
    this.inputItem = this.itemList[index];
    this.listHovaemo = true;
    this.onItemSelected.emit(this.itemList[index]);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
