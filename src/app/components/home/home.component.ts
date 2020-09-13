import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public creditCards: CreditCard[] = [
    {
      name: 'Citi',
      balance: 1300.21,
      interest: 23.16,
    },
    {
      name: 'Discover',
      balance: 4320.83,
      interest: 23.16,
    },
    {
      name: 'Bank of America',
      balance: 3402.97,
      interest: 23.16,
    },
  ];

  public paydownRate = 500;
  constructor(
    public financeService: FinanaceService,
  ) { }

  ngOnInit(): void {
  }
}
