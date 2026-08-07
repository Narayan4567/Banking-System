import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { BankingService } from './banking.services';

describe('BankingService', () => {
  let service: BankingService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:3000/accounts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankingService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(BankingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // ensure no outstanding requests
  });

  // ── Creation ──────────────────────────────────────────────────────────────
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ── getAccounts ───────────────────────────────────────────────────────────
  it('getAccounts() should GET all accounts', () => {
    const mockAccounts = [
      { id: 1, name: 'Alice', balance: 1000 },
      { id: 2, name: 'Bob', balance: 2500 },
    ];

    service.getAccounts().subscribe(accounts => {
      expect(accounts.length).toBe(2);
      expect(accounts).toEqual(mockAccounts);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockAccounts);
  });

  // ── getAccountById ────────────────────────────────────────────────────────
  it('getAccountById() should GET a single account by ID', () => {
    const mockAccount = { id: 1, name: 'Alice', balance: 1000 };

    service.getAccountById(1).subscribe(account => {
      expect(account).toEqual(mockAccount);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAccount);
  });

  // ── addAccount ────────────────────────────────────────────────────────────
  it('addAccount() should POST a new account', () => {
    const newAccount = { name: 'Charlie', balance: 500 };
    const createdAccount = { id: 3, ...newAccount };

    service.addAccount(newAccount).subscribe(account => {
      expect(account).toEqual(createdAccount);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newAccount);
    req.flush(createdAccount);
  });

  // ── updateAccount ─────────────────────────────────────────────────────────
  it('updateAccount() should PATCH an existing account', () => {
    const patch = { balance: 1500 };
    const updated = { id: 1, name: 'Alice', balance: 1500 };

    service.updateAccount(1, patch).subscribe(account => {
      expect(account).toEqual(updated);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual(patch);
    req.flush(updated);
  });

  // ── deleteAccount ─────────────────────────────────────────────────────────
  it('deleteAccount() should DELETE an account by ID', () => {
    service.deleteAccount(1).subscribe(response => {
      expect(response).toEqual({});
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
