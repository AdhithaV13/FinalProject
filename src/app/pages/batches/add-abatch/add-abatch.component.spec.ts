import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddABatchComponent } from './add-abatch.component';

describe('AddABatchComponent', () => {
  let component: AddABatchComponent;
  let fixture: ComponentFixture<AddABatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddABatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddABatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
