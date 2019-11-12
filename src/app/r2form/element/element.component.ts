import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input('obj') baseObj:any;

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

}
