import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input('obj') baseObj:any;
  @Output() onsave = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  isButton(){
    if(this.baseObj.type=='button')
      return true;
    return false;
  }

  isLabel(){
    if(this.baseObj.type=='label')
      return true;
    return false;
  }

  onSaved(t: any){
    this.onsave.emit(t);
  }



}
