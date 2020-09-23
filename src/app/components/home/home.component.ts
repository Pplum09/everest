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
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.007, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
 single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];
  displayedColumns =
      ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
  dataSource = ELEMENT_DATA;
  public monthsToPayoff = 0;
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

  public monthsToPayoffAvalanche = 0;
  public totalInterestPaidAvalanche = 0;
  public totalPaidAvalanche = 0;
  constructor(
    public financeService: FinanceService,
  ) { }

  ngOnInit(): void { }

  private parseTotalInterest(metrics): number {
    let total = 0;
    for (const key of Object.keys(metrics)) {
      total += metrics[key][metrics[key].length - 1].interestAccrued;
    }
    return total;
  }
  public calculate(): void {
    //this.data = this.financeService.computeInterest(this.creditCards, this.monthlyPayment);
    this.totalPrincipal = this.getTotalPrincipal(this.creditCards);
    const monthlyPayment = +this.monthlyPayment;

    // snowball calculations
    const snowballCards = [...this.creditCards].sort((a, b) => a.balance - b.balance);
    const results = this.financeService.calculatePayoff(snowballCards, monthlyPayment);
    this.monthsToPayoff = results.totalMonths;
    this.totalInterestPaid = this.parseTotalInterest(results.metrics);
    this.totalPaid = this.totalInterestPaid + this.totalPrincipal;

    // avalanche calculations
    const avalancheCards = [...this.creditCards].sort((a, b) => b.interest - a.interest);
    const resultsAvalanche = this.financeService.calculatePayoff(avalancheCards, monthlyPayment);
    this.monthsToPayoffAvalanche = resultsAvalanche.totalMonths;
    this.totalInterestPaidAvalanche = this.parseTotalInterest(resultsAvalanche.metrics);
    this.totalPaidAvalanche = this.totalInterestPaidAvalanche + this.totalPrincipal;
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
}
