import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaUno } from './vista-uno';

describe('VistaUno', () => {
  let component: VistaUno;
  let fixture: ComponentFixture<VistaUno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaUno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaUno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
