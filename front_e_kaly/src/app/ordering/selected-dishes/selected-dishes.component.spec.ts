import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedDishesComponent } from './selected-dishes.component';

describe('SelectedDishesComponent', () => {
  let component: SelectedDishesComponent;
  let fixture: ComponentFixture<SelectedDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
