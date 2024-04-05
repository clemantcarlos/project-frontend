import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchFormComponent } from './patch-form.component';

describe('PatchFormComponent', () => {
  let component: PatchFormComponent;
  let fixture: ComponentFixture<PatchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatchFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
