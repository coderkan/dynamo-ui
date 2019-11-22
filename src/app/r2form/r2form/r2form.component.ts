import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {SelectItem} from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-r2form',
  templateUrl: './r2form.component.html',
  styleUrls: ['./r2form.component.css']
})
export class R2formComponent implements OnInit {


  cities1: SelectItem[];
    
  cities2: City[];

  selectedCity1: City;
  
  selectedCity2: City;

  lineArray:any = [];

  matrisArray: any[] = [
    this.lineArray
  ];
  
  constructor() { 
        //SelectItem API with label-value pairs
        this.cities1 = [
            {label:'Select City', value:null},
            {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
            {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
            {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
            {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
            {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
        ];
        
        //An array of cities
        this.cities2 = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
  }

  ngOnInit() {
  }

  addItem(colIndex: number){
    this.matrisArray[colIndex].push({'type': 'button', 'text': 'Button Added', 'index': colIndex});
  }

  addLabel(){
    this.lineArray.push({'type': 'label', 'text': 'Label Added'});
  }

  addNewLine(){
    let x: any[] = [];
    this.matrisArray.push(x);
  }

  onSave(save: any){
    console.log("Saved: " + save);
  }

}
