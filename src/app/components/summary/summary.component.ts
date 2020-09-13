import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {CreditCard} from 'src/app/models/credit-card.model';

export interface PaydownRate {
  name: string;
  series: {
    name: string;
    value: number;
  }[];
}
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit, OnChanges {

  @Input() creditCards: CreditCard[];
  @Input() paydownRate: number;

  private months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  public totalBalance = 0;
  public totalPayoff: PaydownRate[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = true;
  yAxisLabel = 'Balance';
  autoScale = false;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.totalBalance = 0;
    //this.paydownRate = 2000;
    if (changes.hasOwnProperty('creditCards')) {
      for (const card of changes.creditCards.currentValue) {
        this.totalBalance += card.balance;
      }
      this.computePayoff();
    }
  }

  public computePayoff(): void {
    let balance = this.totalBalance
    let paydownRate = this.paydownRate
    const series = [];
    const today = new Date();
    let currentMonth = today.getMonth();
    let year = today.getFullYear();
    do {
      series.push({
        name: `${this.months[currentMonth]} '${year - 2000}`,
        value: Math.trunc(balance),
      });
      balance = balance - paydownRate;
      currentMonth += currentMonth >= this.months.length - 1 ? -currentMonth : 1;
      if (currentMonth === 0) {
        year++;
      }
    } while (balance > 0);

    const result = [{name: 'Citi Bank', series}];
    this.totalPayoff = result;
  }
  public computeInterest() {

  }
}
