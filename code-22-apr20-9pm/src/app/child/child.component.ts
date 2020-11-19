import { Component, OnInit, ViewEncapsulation, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  //encapsulation:ViewEncapsulation.None
  //inputs:['Pdata']
  outputs: ['childevent']
})
export class ChildComponent implements OnInit {
  Pdata: any;
  childevent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onchange(value) {
    this.childevent.emit(value);
  }
}
