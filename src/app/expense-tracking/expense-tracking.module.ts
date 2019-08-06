import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ExpenseTrackingRoutingModule } from './expense-tracking-routing.module';
import { ExpenseComponent } from './expense/expense.component';


@NgModule({
  declarations: [ExpenseComponent],
  imports: [
    CommonModule,
    ExpenseTrackingRoutingModule,
    FormsModule
  ],
  exports: [
    ExpenseComponent
  ]
})
export class ExpenseTrackingModule { }
