import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from '../balance/balance.component';
import { DepositComponent } from '../deposit/deposit.component';
import { WithdrawComponent } from '../withdraw/withdraw.component';
import { TransferComponent } from '../transfer/transfer.component';
@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, BalanceComponent, DepositComponent, WithdrawComponent, TransferComponent],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  balance: number = 50000;
  transactionHistory: any[] = [];
  handleDeposit(amount: number) {
    this.balance += amount;
    this.transactionHistory.unshift({
      type: 'Deposit',
      amount: amount,
      date: new Date(),
      balance: this.balance
    });
  }
  handleWithdraw(amount: number) {
    this.balance -= amount;
    this.transactionHistory.unshift({
      type: 'Withdraw',
      amount: amount,
      date: new Date(),
      balance: this.balance
    });
  }
  handleTransfer(transferData: any) {
    if (transferData.amount > this.balance) {
      alert('Insufficient balance');
      return;
    }
    this.balance -= transferData.amount;
    this.transactionHistory.unshift({
      type: 'Transfer',
      amount: transferData.amount,
      accountNumber: transferData.accountNumber,
      accountName: transferData.accountName,
      description: transferData.description,
      date: transferData.date,
      balance: this.balance
    });
    alert(`₹${transferData.amount} transferred successfully to ${transferData.accountName}`);
  }
}