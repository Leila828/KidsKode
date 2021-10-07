import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2readmoreComponent } from './level2readmore.component';

describe('Level2readmoreComponent', () => {
  let component: Level2readmoreComponent;
  let fixture: ComponentFixture<Level2readmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level2readmoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2readmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
