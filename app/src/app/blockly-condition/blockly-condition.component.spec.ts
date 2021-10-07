import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocklyConditionComponent } from './blockly-condition.component';

describe('BlocklyConditionComponent', () => {
  let component: BlocklyConditionComponent;
  let fixture: ComponentFixture<BlocklyConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocklyConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocklyConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
