import { Component, OnInit } from '@angular/core';
import { BankingService } from '../banking.services';
import { SharedModule } from '../shared/shared.module';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  bankName = "HDFC";
  accountHolder = "Narayana";
  accountNumber = "123456789";
  balance = 5000000;
  transactions: any[] = [];
  constructor(private bankingService: BankingService) {}
  ngOnInit(): void {
    this.bankingService.getAccounts().subscribe((data: any) => {
      console.log(data);
      // Example for first account
      this.bankName = data[0].bankName;
      this.accountHolder = data[0].accountHolder;
      this.accountNumber = data[0].accountNumber;
      this.balance = data[0].balance;
      this.transactions = data[0].transactions;
    });
  }
}



// [
//   {
//     "bankName": "ABC Bank",
//     "accountHolder": "Narayana",
//     "accountNumber": "1234567890",
//     "balance": 85000,
//     "transactions": [
//       {
//         "type": "Credit",
//         "amount": 2000
//       },
//       {
//         "type": "Debit",
//         "amount": 500
//       }
//     ]
//   }
// ]