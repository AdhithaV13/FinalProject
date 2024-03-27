import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBatchesComponent } from './view-all-batches.component';

describe('ViewAllBatchesComponent', () => {
  let component: ViewAllBatchesComponent;
  let fixture: ComponentFixture<ViewAllBatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllBatchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
