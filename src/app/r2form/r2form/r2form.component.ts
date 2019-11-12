import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-r2form',
  templateUrl: './r2form.component.html',
  styleUrls: ['./r2form.component.css']
})
export class R2formComponent implements OnInit {

  lineArray:any = [
    {
      "type": "button",
      "text": "Call Me"
    },
    {
      "type": "button",
      "text": "Say Hi"
    }
    ,
    {
      "type": "label",
      "text": "Say Hi Label"
    }
  ];

  matrisArray: any[] = [
    this.lineArray
  ];
  
  constructor() { 

  }

  ngOnInit() {
  }

  addButton(){
    this.lineArray.push({'type': 'button', 'text': 'Button Added'});
  }

  addLabel(){
    this.lineArray.push({'type': 'label', 'text': 'Label Added'});
  }

}
