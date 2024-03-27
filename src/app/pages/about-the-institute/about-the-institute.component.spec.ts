import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheInstituteComponent } from './about-the-institute.component';

describe('AboutTheInstituteComponent', () => {
  let component: AboutTheInstituteComponent;
  let fixture: ComponentFixture<AboutTheInstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutTheInstituteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutTheInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
