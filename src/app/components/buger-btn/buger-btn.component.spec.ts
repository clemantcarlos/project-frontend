import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugerBtnComponent } from './buger-btn.component';

describe('BugerBtnComponent', () => {
  let component: BugerBtnComponent;
  let fixture: ComponentFixture<BugerBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BugerBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BugerBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
