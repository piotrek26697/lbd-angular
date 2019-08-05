import { Component, OnInit } from '@angular/core';
import { Expense } from './expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: Array<Expense>;
  selectedExpense: Expense;
  expenseService: ExpenseService;

  constructor(expenseService: ExpenseService) {
    this.expenseService = expenseService;
  }

  ngOnInit() {
    //this.expenses = this.expenseService.generateExpenseList();
    this.expenseService.getHttpData().subscribe(x => this.expenses = x);
  }

  selectExpense(expense: Expense) {
    this.selectedExpense = expense;
  }
}
