import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {
  depositAmount: number = 0;
  @Output() onDeposit = new EventEmitter<number>();
  deposit() {
    if (this.depositAmount > 0) {
      this.onDeposit.emit(this.depositAmount);
      this.depositAmount = 0;
    } else {
      alert('Please enter a valid amount');
    }
  }
}