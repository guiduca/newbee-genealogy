import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person'

@Component({
  selector: 'app-familly-member',
  templateUrl: './familly-member.component.html',
  styleUrls: ['./familly-member.component.css']
})
export class FamillyMemberComponent implements OnInit {
  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}
