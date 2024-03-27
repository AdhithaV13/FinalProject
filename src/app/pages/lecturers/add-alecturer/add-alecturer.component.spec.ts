import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddALecturerComponent } from './add-alecturer.component';

describe('AddALecturerComponent', () => {
  let component: AddALecturerComponent;
  let fixture: ComponentFixture<AddALecturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddALecturerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddALecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
