import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css'
})
export class TransferComponent {
  balance: number = 50000;
  accountNumber: string = '';
  accountName: string = '';
  amount: number = 0;
  description: string = '';
  transferHistory: any[] = [];
  constructor(private router: Router) {}
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    alert('Logged out successfully');
    this.router.navigate(['/login']);
  }
  transfer(): void {
    if (!this.accountNumber || !this.accountName || this.amount <= 0) {
      alert('Please fill all fields with valid data');
      return;
    }
    if (this.amount > this.balance) {
      alert('Insufficient balance');
      return;
    }
    this.balance -= this.amount;
    this.transferHistory.unshift({
      accountNumber: this.accountNumber,
      accountName: this.accountName,
      amount: this.amount,
      description: this.description,
      date: new Date(),
      balance: this.balance
    });
    alert(`₹${this.amount} transferred successfully to ${this.accountName}`);
    // Reset form
    this.accountNumber = '123455667';
    this.accountName = 'Narayana';
    this.amount = 500000000;
    this.description = 'gdjwege';
  }
}