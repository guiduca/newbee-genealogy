import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamillyTreeComponent } from './familly-tree.component';

describe('FamillyTreeComponent', () => {
  let component: FamillyTreeComponent;
  let fixture: ComponentFixture<FamillyTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamillyTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamillyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
