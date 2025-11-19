import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithPassword } from './login-with-password';

describe('LoginWithPassword', () => {
  let component: LoginWithPassword;
  let fixture: ComponentFixture<LoginWithPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWithPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWithPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
