import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseTrackingRoutingModule } from './expense-tracking-routing.module';
import { ExpenseComponent } from './expense/expense.component';


@NgModule({
  declarations: [ExpenseComponent],
  imports: [
    CommonModule,
    ExpenseTrackingRoutingModule
  ],
  exports: [
    ExpenseComponent
  ]
})
export class ExpenseTrackingModule { }
