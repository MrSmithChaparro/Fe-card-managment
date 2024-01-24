import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCardComponent } from 'src/app/detail-card/detail-card.component'
import { LoginComponent } from 'src/app/login/login.component'
import { ExpensesComponent } from './expenses/expenses.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  {
    path: 'card', component: DetailCardComponent,
    children: [
      {path: 'expenses', component: ExpensesComponent},
      {path: 'payments', component: PaymentsComponent}
    ]

  },
  {path: 'login', component: LoginComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: 'payments', component: PaymentsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
