import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { FAMILLY } from '../mock-person';

@Component({
  selector: 'app-familly-tree',
  templateUrl: './familly-tree.component.html',
  styleUrls: ['./familly-tree.component.css']
})
export class FamillyTreeComponent implements OnInit {
  parent = FAMILLY.filter(FAMILLY =>FAMILLY.father === undefined);

  constructor() { }

  ngOnInit() {
  }

}
