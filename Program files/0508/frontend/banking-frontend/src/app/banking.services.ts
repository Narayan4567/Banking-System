import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BankingService {
  private apiUrl = 'http://localhost:3000/accounts';
  constructor(private http: HttpClient) { }
  // GET - Fetch all accounts
  getAccounts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  // GET by ID
  getAccountById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // POST - Create new account
  addAccount(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  // PATCH - Update partial data
  updateAccount(id: number, data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, data);
  }
  // DELETE - Remove account
  deleteAccount(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}