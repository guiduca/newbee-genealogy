import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { FAMILLY } from '../mock-person'

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})
export class GenerationComponent implements OnInit {
  @Input() parent: Person

  constructor() { }

  ngOnInit() {
  const child = FAMILLY.filter(FAMILLY => FAMILLY.father === this.parent.id)
  }

}
