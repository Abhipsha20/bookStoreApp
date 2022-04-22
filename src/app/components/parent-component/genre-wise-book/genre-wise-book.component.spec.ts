import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreWiseBookComponent } from './genre-wise-book.component';

describe('GenreWiseBookComponent', () => {
  let component: GenreWiseBookComponent;
  let fixture: ComponentFixture<GenreWiseBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreWiseBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreWiseBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
