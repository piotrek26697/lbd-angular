import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Expense, ExpenseAttrs } from './expense/expense';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseManagerService {

  constructor(private httpClient: HttpClient) { }

  getExpenses(): Observable<Expense[]> {
    return this.httpClient.get<ExpenseAttrs[]>('/api/expenses').pipe(
      map((data) => data.map((expenseAttrs) => new Expense(expenseAttrs)))
    );
  }

}
