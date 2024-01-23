import { Component } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})

export class ExpensesComponent {
  historial = [
    { date: new Date('2024-01-22'), amount: 50, store: 'Tienda A' },
    { date: new Date('2023-01-22'), amount: 100, store: 'Tienda B' }
  ]
}

