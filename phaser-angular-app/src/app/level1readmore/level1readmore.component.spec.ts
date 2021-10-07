import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1readmoreComponent } from './level1readmore.component';

describe('Level1readmoreComponent', () => {
  let component: Level1readmoreComponent;
  let fixture: ComponentFixture<Level1readmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level1readmoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1readmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
