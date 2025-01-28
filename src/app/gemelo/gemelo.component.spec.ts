import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemeloComponent } from './gemelo.component';

describe('GemeloComponent', () => {
  let component: GemeloComponent;
  let fixture: ComponentFixture<GemeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GemeloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GemeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
