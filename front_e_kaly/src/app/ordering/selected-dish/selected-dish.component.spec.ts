import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedDishComponent } from './selected-dish.component';

describe('SelectedDishComponent', () => {
  let component: SelectedDishComponent;
  let fixture: ComponentFixture<SelectedDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
