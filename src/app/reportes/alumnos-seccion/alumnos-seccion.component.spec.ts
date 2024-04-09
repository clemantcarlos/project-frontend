import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosSeccionComponent } from './alumnos-seccion.component';

describe('AlumnosSeccionComponent', () => {
  let component: AlumnosSeccionComponent;
  let fixture: ComponentFixture<AlumnosSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnosSeccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnosSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
