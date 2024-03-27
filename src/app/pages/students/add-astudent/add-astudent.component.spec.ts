import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAStudentComponent } from './add-astudent.component';

describe('AddAStudentComponent', () => {
  let component: AddAStudentComponent;
  let fixture: ComponentFixture<AddAStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
