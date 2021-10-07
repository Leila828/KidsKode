import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RessetpasswordComponent } from './ressetpassword.component';

describe('RessetpasswordComponent', () => {
  let component: RessetpasswordComponent;
  let fixture: ComponentFixture<RessetpasswordComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RessetpasswordComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RessetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
