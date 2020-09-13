import { Injectable } from '@angular/core';

export interface CreditCard {
  name: string;
  balance: number;
  interest: number;
}

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

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

  constructor() { }

  private computeTotalBalance(cards: CreditCard[]): number {
    let totalBalance = 0;
    for (const card of cards) {
      totalBalance += card.balance;
    }

    return totalBalance;
  }

  private getInterest(balance: number, dailyInterest: number): number {
    return (30 * balance * dailyInterest) + balance
  }

  private shallowCopy(card: CreditCard): CreditCard {
    return {
      name: card.name,
      balance: card.balance,
      interest: card.interest,
    }
  }

  public computeInterest(creditCards: CreditCard[]) {

    let currentCardIndex = 0;
    const years = 5;
    const months = years * 12;
    let results = [];
    const paydownRate = 150;
    const today = new Date();
    let year = today.getFullYear();
    const startYear = year;
    let currentMonth = today.getMonth();
    const ccCopy = [];

    let totalBalance = this.computeTotalBalance(creditCards);
    const cardMap = {Total: [{
      name: `${this.months[currentMonth]} '${year - 2000}`,
      value: Math.trunc(totalBalance),
    }]};
    for (const card of creditCards) {
      let fuck = this.shallowCopy(card)
      ccCopy.push(fuck);
      cardMap[card.name] = [{
        name: `${this.months[currentMonth]} '${year - 2000}`,
        value: Math.trunc(card.balance),
      }];
    }
    currentMonth += currentMonth >= this.months.length - 1 ? -currentMonth : 1;
    if (currentMonth === 0) {
      year++;
    }
    do {

      // pay down current card
      ccCopy[currentCardIndex].balance -= paydownRate;
      if (ccCopy[currentCardIndex].balance < 0) {
        ccCopy[currentCardIndex].balance = 0;
      }
      totalBalance = 0
      for (let i = 0; i < ccCopy.length; i++) {

        // apply interest to all cards
        const dailyInterest = ccCopy[i].interest / 100 / 365;
        ccCopy[i].balance = this.getInterest(
          ccCopy[i].balance,
          dailyInterest
        );

        // calculate total balance
        totalBalance += ccCopy[i].balance;

        // apply balance to appropriate card series
        cardMap[ccCopy[i].name].push({
          name: `${this.months[currentMonth]} '${year - 2000}`,
          value: Math.trunc(ccCopy[i].balance),
        });

      }

      // add total balance to series
      cardMap['Total'].push({
        name: `${this.months[currentMonth]} '${year - 2000}`,
        value: Math.trunc(totalBalance),
      });

      // increment current card if balance is 0
      currentMonth += currentMonth >= this.months.length - 1 ? -currentMonth : 1;
      if (currentMonth === 0) {
        year++;
      }

      if (ccCopy[currentCardIndex].balance <= 0) {
        currentCardIndex++;
      }

    } while (totalBalance > 0 && year < startYear + 10 && currentCardIndex < ccCopy.length);



    // apply to graph
    for (var key of Object.keys(cardMap)) {
      results.push({name: key, series: cardMap[key]});
    }

    return results;
  }
}
