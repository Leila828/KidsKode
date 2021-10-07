import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RessetpasswordfinalComponent } from './ressetpasswordfinal.component';

describe('RessetpasswordfinalComponent', () => {
  let component: RessetpasswordfinalComponent;
  let fixture: ComponentFixture<RessetpasswordfinalComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RessetpasswordfinalComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RessetpasswordfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
