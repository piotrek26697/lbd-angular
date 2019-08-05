import { Component, OnInit } from '@angular/core';
import { Expense } from './expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: Array<Expense>;

  constructor() { }

  ngOnInit() {
    this.expenses = new Array();
    this.expenses.push(new Expense(1, "354"));
    this.expenses.push(new Expense(2, "6326"));
    this.expenses.push(new Expense(3, "614"));
  }

}
