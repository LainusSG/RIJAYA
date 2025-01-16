import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuario2Component } from './usuario2.component';

describe('Usuario2Component', () => {
  let component: Usuario2Component;
  let fixture: ComponentFixture<Usuario2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usuario2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usuario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
