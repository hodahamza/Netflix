import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithCode } from './login-with-code';

describe('LoginWithCode', () => {
  let component: LoginWithCode;
  let fixture: ComponentFixture<LoginWithCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWithCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWithCode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
