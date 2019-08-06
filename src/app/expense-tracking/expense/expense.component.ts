import { Component, OnInit } from '@angular/core';
import { Expense } from './expense';
import { ExpenseManagerService } from '../expense-manager.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: Array<Expense>;
  selectedExpense: Expense;
  subscribedExpenses: Subscription;

  constructor(private expenseService: ExpenseManagerService) {
  }

  ngOnInit() {
    //this.expenses = this.expenseService.generateExpenseList();
    //this.expenseService.getHttpData().subscribe(x => this.expenses = x);

    this.subscribedExpenses = this.expenseService.getExpenses().subscribe(
      (expenses) => this.expenses = expenses,
      () => alert('Could not get any expenses')
    );
  }

  onDestroy() {
    if (this.subscribedExpenses != null)
      this.subscribedExpenses.unsubscribe();
  }

  selectExpense(expense: Expense) {
    this.selectedExpense = expense;
  }
}
