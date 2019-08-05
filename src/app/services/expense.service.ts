import { Injectable } from '@angular/core';
import { Expense } from '../expense-tracking/expense/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  generateExpenseList(){
    const expenses = new Array();
    expenses.push(new Expense(1, "animals", 53));
    expenses.push(new Expense(2, "house", 132));
    expenses.push(new Expense(3, "education", 621));
    return expenses;
  }
  constructor() { }
}
