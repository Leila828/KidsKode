import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocklyRepeatComponent } from './blockly-repeat.component';

describe('BlocklyRepeatComponent', () => {
  let component: BlocklyRepeatComponent;
  let fixture: ComponentFixture<BlocklyRepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocklyRepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocklyRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
