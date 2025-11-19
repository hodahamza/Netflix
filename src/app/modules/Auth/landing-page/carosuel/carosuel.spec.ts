import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carosuel } from './carosuel';

describe('Carosuel', () => {
  let component: Carosuel;
  let fixture: ComponentFixture<Carosuel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carosuel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carosuel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
