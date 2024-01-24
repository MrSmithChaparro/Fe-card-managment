import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
  historial = [
    { date: new Date('2024-01-22'), amount: 50, total_quota: 500 },
    { date: new Date('2024-01-23'), amount: 100, total_quota: 450 }
  ]
}
