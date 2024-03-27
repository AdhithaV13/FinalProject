import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAPaymentComponent } from './add-apayment.component';

describe('AddAPaymentComponent', () => {
  let component: AddAPaymentComponent;
  let fixture: ComponentFixture<AddAPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
