import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LevelDetailsComponent } from './level-details.component';

describe('LevelDetailsComponent', () => {
  let component: LevelDetailsComponent;
  let fixture: ComponentFixture<LevelDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
