import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaOne } from './page-one';

describe('PaginaOne', () => {
  let component: PaginaOne;
  let fixture: ComponentFixture<PaginaOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaOne]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PaginaOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
