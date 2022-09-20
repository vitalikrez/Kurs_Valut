import { Component, OnInit, Input} from '@angular/core';
import { ITEMS } from '../valuty';

@Component({
  selector: 'app-my-combo-box',
  templateUrl: './my-combo-box.component.html',
  styleUrls: ['./my-combo-box.component.css']
})
export class MyComboBoxComponent implements OnInit {


  inputItem: string="";
  itemList: string[] = ITEMS;
  selectedIndex: number=-1;

  @Input() list: string[]=[];

  listHovaemo:boolean=false;

  selectItem(index:number):void{
    this.selectedIndex = index;
    this.inputItem = this.itemList[index];
    //this.listHovaemo = true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
