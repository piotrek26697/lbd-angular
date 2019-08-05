import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ExpenseTrackingRoutingModule } from './expense-tracking-routing.module';
import { ExpenseComponent } from './expense/expense.component';


@NgModule({
  declarations: [ExpenseComponent],
  imports: [
    CommonModule,
    ExpenseTrackingRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ExpenseComponent
  ]
})
export class ExpenseTrackingModule { }
