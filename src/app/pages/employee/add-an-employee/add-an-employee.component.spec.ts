import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnEmployeeComponent } from './add-an-employee.component';

describe('AddAnEmployeeComponent', () => {
  let component: AddAnEmployeeComponent;
  let fixture: ComponentFixture<AddAnEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAnEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAnEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
