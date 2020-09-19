import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card.model';
import { FinanceService } from 'src/app/services/finance.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public monthsToPayoff = null;
  public totalPrincipal = 0;
  public totalInterestPaid = 0;
  public totalPaid = 0;
  public displayForm = false;
  public creditCards: CreditCard[] = [
    {
      name: 'Citi',
      balance: 1300.21,
      interest: 23.16,
    },
    {
      name: 'Discover',
      balance: 4320.83,
      interest: 18.02,
    },
    {
      name: 'Bank of America',
      balance: 3402.97,
      interest: 21.47,
    },
  ];

  public monthlyPayment = 500;
  public data = [];
  inputColumns = ['position', 'name', 'weight', 'symbol'];
  inputData = ELEMENT_DATA;
  displayColumns: string[];
  displayData: any[];

  constructor(
    public financeService: FinanceService,
  ) { }

  ngOnInit(): void {
        this.displayColumns = ['0'].concat(this.inputData.map(x => x.position.toString()));
    this.displayData = this.inputColumns.map(x => this.formatInputRow(x));
  }

  public calculate(): void {
    //this.data = this.financeService.computeInterest(this.creditCards, this.monthlyPayment);
    this.totalPrincipal = this.getTotalPrincipal(this.creditCards);
    const monthlyPayment = +this.monthlyPayment;
    const results = this.financeService.calculatePayoff(this.creditCards, monthlyPayment);
    this.monthsToPayoff = results.totalMonths;
    this.totalInterestPaid = results.totalPayment - this.totalPrincipal;
    this.totalPaid = this.totalInterestPaid + this.totalPrincipal;
  }

  private getTotalPrincipal(cards: CreditCard[]): number {
    let sum = 0;
    for (const card of cards) {
      sum += card.balance;
    }
    return sum;
  }

  public getTime(months: number): string {
    if (months === this.financeService.maxMonths) {
      return 'Never.';
    }

    const year = Math.trunc((months / 12));
    const month = months % 12;
    if (year && month) {
      return `${year} years ${month} months`;
    } else if (!year && month) {
      return `${month} months`;
    } else if (year && !month) {
      return `${year} years`;
    }
    return 'n/a';
  }

  public displayCardForm(): void {
    this.displayForm = true;
  }

  public cardCreated(): void {
    this.displayForm = false;
  }

  public formatInputRow(row) {
    const output = {};

    output[0] = row;
    for (let i = 0; i < this.inputData.length; ++i) {
      output[this.inputData[i].position] = this.inputData[i][row];
    }

    return output;
  }
}
