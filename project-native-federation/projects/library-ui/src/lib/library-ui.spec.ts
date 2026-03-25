import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryUi } from './library-ui';

describe('LibraryUi', () => {
  let component: LibraryUi;
  let fixture: ComponentFixture<LibraryUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
