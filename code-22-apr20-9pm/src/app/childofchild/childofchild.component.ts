import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-childofchild',
  templateUrl: './childofchild.component.html',
  styleUrls: ['./childofchild.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ChildofchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
