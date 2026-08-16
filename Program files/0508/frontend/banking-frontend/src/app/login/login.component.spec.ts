import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { vi } from 'vitest';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLogin: ReturnType<typeof vi.fn>;
  let authServiceStub: Partial<AuthService>;

  beforeEach(async () => {
    mockLogin = vi.fn();
    authServiceStub = { login: mockLogin as any };

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ── Creation ──────────────────────────────────────────────────────────────
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise with empty fields and no error message', () => {
    expect(component.email).toBe('');
    expect(component.password).toBe('');
    expect(component.errorMessage).toBe('');
  });

  // ── Validation ────────────────────────────────────────────────────────────
  it('login() should set errorMessage when email is empty', () => {
    component.email = '';
    component.password = 'secret';
    component.login();
    expect(component.errorMessage).toBe('Please enter email and password.');
    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('login() should set errorMessage when password is empty', () => {
    component.email = 'alice@example.com';
    component.password = '';
    component.login();
    expect(component.errorMessage).toBe('Please enter email and password.');
    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('login() should set errorMessage when both fields are empty', () => {
    component.email = '';
    component.password = '';
    component.login();
    expect(component.errorMessage).toBe('Please enter email and password.');
  });

  // ── Successful login ──────────────────────────────────────────────────────
  it('login() should call AuthService.login with correct credentials', () => {
    mockLogin.mockReturnValue(of(true));
    component.email = 'alice@example.com';
    component.password = 'password123';
    component.login();
    expect(mockLogin).toHaveBeenCalledWith('alice@example.com', 'password123');
  });

  it('login() should clear errorMessage before calling the service', () => {
    mockLogin.mockReturnValue(of(true));
    component.errorMessage = 'old error';
    component.email = 'alice@example.com';
    component.password = 'password123';
    component.login();
    expect(component.errorMessage).toBe('');
  });

  it('login() should not set errorMessage on successful login', () => {
    mockLogin.mockReturnValue(of(true));
    component.email = 'alice@example.com';
    component.password = 'password123';
    component.login();
    expect(component.errorMessage).toBe('');
  });

  // ── Failed login ──────────────────────────────────────────────────────────
  it('login() should set errorMessage on invalid credentials', () => {
    mockLogin.mockReturnValue(of(false));
    component.email = 'wrong@example.com';
    component.password = 'wrongpass';
    component.login();
    expect(component.errorMessage).toBe('Invalid email or password.');
  });

  // ── Template ──────────────────────────────────────────────────────────────
  it('should render email and password inputs', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('input[type="email"]')).toBeTruthy();
    expect(compiled.querySelector('input[type="password"]')).toBeTruthy();
  });

  it('should render a Login button', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const button = compiled.querySelector('button');
    expect(button?.textContent?.trim()).toBe('Login');
  });

  it('should not show error message element when errorMessage is empty', () => {
    component.errorMessage = '';
    fixture.detectChanges();
    const errorEl = fixture.nativeElement.querySelector('.error-message');
    expect(errorEl).toBeNull();
  });

  it('should show error message element when errorMessage is set', () => {
    mockLogin.mockReturnValue(of(false));
    component.email = 'bad@example.com';
    component.password = 'bad';
    component.login();
    fixture.detectChanges();
    const errorEl = fixture.nativeElement.querySelector('.error-message');
    expect(errorEl).toBeTruthy();
    expect(errorEl.textContent.trim()).toBe('Invalid email or password.');
  });
});
