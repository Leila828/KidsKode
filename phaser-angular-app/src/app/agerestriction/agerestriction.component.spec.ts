import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgerestrictionComponent } from './agerestriction.component';

describe('AgerestrictionComponent', () => {
  let component: AgerestrictionComponent;
  let fixture: ComponentFixture<AgerestrictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgerestrictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgerestrictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
