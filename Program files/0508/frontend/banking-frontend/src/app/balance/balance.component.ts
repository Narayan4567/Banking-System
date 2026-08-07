import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-balance',
  standalone: true,
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent {
  @Input() currentBalance: number = 0;
}