import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {
  withdrawAmount: number = 0;
  @Input() currentBalance: number = 0;
  @Output() onWithdraw = new EventEmitter<number>();
  withdraw() {
    if (this.withdrawAmount <= 0) {
      alert('Please enter a valid amount');
    } else if (this.withdrawAmount > this.currentBalance) {
      alert('Insufficient balance');
    } else {
      this.onWithdraw.emit(this.withdrawAmount);
      this.withdrawAmount = 0;
    }
  }
}