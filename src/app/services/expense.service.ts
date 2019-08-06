import { Injectable } from '@angular/core';
import { Expense } from '../expense-tracking/expense/expense';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
    url: string = "https://my-json-server.typicode.com/piotrek26697/RESTmock/expenses";

  generateExpenseList(): Array<Expense>{
    const expenses: Array<Expense> = new Array();
    // expenses.push(new Expense(1, "animals", 53));
    // expenses.push(new Expense(2, "house", 132));
    // expenses.push(new Expense(3, "education", 621));
    return expenses;
  }
  getHttpData(): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>(this.url).pipe();
  }

  constructor(private httpClient: HttpClient) {
  }
}
