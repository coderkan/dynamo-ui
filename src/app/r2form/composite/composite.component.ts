import { Component, OnInit } from '@angular/core';
import { Definition } from 'src/app/models/definition';
import { Item } from 'src/app/models/item';
import {SelectItem} from 'primeng/components/common/api';
//import { Message } from 'primeng/components/common/message';
//import { MessageService } from 'primeng/components/common/messageservice';
import { MessageService } from 'primeng/api'; 

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css'],
  providers: [ MessageService ]
})
export class CompositeComponent implements OnInit {

  totalComposite: string;
  selectedDefinition: Definition;
  tempDefs: Definition[] = [];
  listDefs: Definition[] = [];

  definitions: Definition[] = [
    { "id": 1, "name": "HAOS"},
    { "id": 2, "name": "Body"},
    { "id": 3, "name": "171 Station"},
    { "id": 4, "name": "172 Stn"},
    { "id": 5, "name": "Sealer Check"},
    { "id": 6, "name": "08:00 ~ 09:00"},
    { "id": 7, "name": "09:00~10:00"},
    { "id": 8, "name": "09:00~10:00"},
    { "id": 9, "name": "GB3"},
    { "id": 10, "name": "GB5"},
    { "id": 11, "name": "BB Line"}
  ];

  modelComposite: Item;

  modelComp: Item[] = [];

  //msgs: Message[] = [];
    
  constructor(private messageService: MessageService) { 
    this.selectedDefinition = this.definitions[0];
    this.modelComposite = new Item();
  }

  ngOnInit() {
  }

  addComposite(){
    if(this.selectedDefinition != null || this.selectedDefinition != undefined ){
      this.listDefs.push(this.selectedDefinition);
      this.tempDefs.push(this.selectedDefinition);
      this.addSingle();
      setTimeout(() => {
        this.clear();
      }, 1000);
    }
  }

  saveComposite(){
    let itms = this.listDefs.reverse();
    this.modelComp.length = 0;
    for( var i = 0; i <itms.length; i++){
      var df = itms[i];
        let _model = new Item();
        _model.parent = (i == 0) ? null : this.modelComp[this.modelComp.length-1];
        _model.definition = df;
        _model.id = i;
        this.modelComp.push(_model);
    }
    this.writeToScreen(this.modelComp);
  }

  writeToScreen(list: Item[]){
    let screen = '';
    var _parent = list[list.length -1 ];
    var _counter = 0;
    while(_counter<list.length-1){
      if(_parent == null)
        break;

      var _parentName = _parent.definition.name;
      screen += _parentName + ' > ';

      _parent = _parent.parent;
    
      _counter++;
    }
    this.totalComposite = screen;
    //alert(screen);
  
  }

  clearComposite(){
    this.totalComposite = '';
    this.selectedDefinition = null;
    this.listDefs = [];
    this.tempDefs = [];
    this.modelComposite = null;

    this.modelComp = [];

    this.selectedDefinition = this.definitions[0];
    this.modelComposite = new Item();
  }

  addSingle() {
    this.messageService.add({key: 'tl', severity:'success', summary:'', detail:'Item Added'});
  }

  clear() {
    this.messageService.clear();
  }

}
