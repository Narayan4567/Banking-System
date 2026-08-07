import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionComponent } from './transaction/transaction.component';


@Component({
  selector: 'app-transaction',
  // selector: 'app-root',
  // imports: [TransactionComponent],
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('banking-frontend');
}