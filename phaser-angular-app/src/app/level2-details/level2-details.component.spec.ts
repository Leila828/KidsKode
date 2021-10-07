import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Level2DetailsComponent } from './level2-details.component';

describe('Level2DetailsComponent', () => {
  let component: Level2DetailsComponent;
  let fixture: ComponentFixture<Level2DetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
