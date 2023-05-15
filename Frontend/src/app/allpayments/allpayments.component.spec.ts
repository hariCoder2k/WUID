import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpaymentsComponent } from './allpayments.component';

describe('AllpaymentsComponent', () => {
  let component: AllpaymentsComponent;
  let fixture: ComponentFixture<AllpaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
