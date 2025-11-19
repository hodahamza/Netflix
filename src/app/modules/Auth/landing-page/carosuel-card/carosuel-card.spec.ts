import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosuelCard } from './carosuel-card';

describe('CarosuelCard', () => {
  let component: CarosuelCard;
  let fixture: ComponentFixture<CarosuelCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarosuelCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarosuelCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
