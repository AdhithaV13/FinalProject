import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnEmployeeComponent } from './update-an-employee.component';

describe('UpdateAnEmployeeComponent', () => {
  let component: UpdateAnEmployeeComponent;
  let fixture: ComponentFixture<UpdateAnEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAnEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAnEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
