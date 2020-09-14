import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card.model';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public creditCards: CreditCard[] = [];

  public monthlyPayment = 500;
  public data = [];

  constructor(
    public financeService: FinanceService,
  ) { }

  ngOnInit(): void {
  }

  public calculate(): void {
    this.data = this.financeService.computeInterest(this.creditCards, this.monthlyPayment);
  }
}
