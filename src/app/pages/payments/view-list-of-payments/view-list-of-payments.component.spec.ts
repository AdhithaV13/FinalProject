import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListOfPaymentsComponent } from './view-list-of-payments.component';

describe('ViewListOfPaymentsComponent', () => {
  let component: ViewListOfPaymentsComponent;
  let fixture: ComponentFixture<ViewListOfPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewListOfPaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewListOfPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
