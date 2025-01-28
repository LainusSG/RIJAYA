import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEstanteComponent } from './crear-estante.component';

describe('CrearEstanteComponent', () => {
  let component: CrearEstanteComponent;
  let fixture: ComponentFixture<CrearEstanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearEstanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEstanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
