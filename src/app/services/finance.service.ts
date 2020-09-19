import { Injectable } from '@angular/core';
import { Card } from 'src/app/models/card';

const DEBUG = false;

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

  /** represents the max amount of months we will make calculations
   *  the assumption is that you should never need 40 years to pay off cc debt
   */
  public maxMonths = 40 * 12;
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

  private constructCardObjs(creditCards: CreditCard[]): Card[] {
    const cards = [];
    const minimumPayment = 35;
    for (const card of creditCards) {
      cards.push(new Card(card.balance, card.interest, card.name, minimumPayment));
    }
    return cards
  }

  private allDebtsPaid(cards: Card[]): boolean {
    return cards.every(card => card.isPaidOff());
  }

  private findAndFocusCard(cards: Card[]): void {
    let focusNextCard = false;
    for (const card of cards) {

      // although payoff of the last card in the list will also set this
      // variable, the loop will finish before it is read on a card that would
      // have been out of bounds.
      if (focusNextCard) {
        card.focus();
        focusNextCard = false;
      }

      if (card.focused && card.isPaidOff()) {
        focusNextCard = true;
        card.unfocus()
      }

    }
  }

  private payAllCards(cards: Card[], payment: number): number {

    // if a card is paid off in one iteration, then the remaining payment will
    // go toward the next card. This includes minimum payments as well.
    let remainingMoney = 0;
    let totalPayment = 0;
    for (const card of cards) {
      let paymentAmount = 0;
      if (card.focused) {
        paymentAmount = payment;
      } else {
        paymentAmount = card.minimumPayment;
      }


      const leftOver = card.balance - paymentAmount;
      if (leftOver < 0) {
        remainingMoney += -leftOver;
        paymentAmount -= remainingMoney;
      }
      const finalPayment = paymentAmount + remainingMoney;
      totalPayment += finalPayment;
      card.applyPayment(finalPayment);
    }

    // moves the focused card to next if current card has been paid off
    // during this iteration
    this.findAndFocusCard(cards);
    return totalPayment;
  }

  private applyInterest(cards: Card[]): void {
    for (const card of cards) {
      if (!card.isPaidOff()) {
        card.applyInterest();
      }
    }
  }

  private calculateMontlyPayment(cards: Card[], payment: number): number {
    for (const card of cards) {
      payment -= card.minimumPayment;
    }
    return payment;
  }

  public calculatePayoff(creditCards: CreditCard[], payment: number): {totalMonths: number, totalPayment: number} {

    const cards = this.constructCardObjs(creditCards);
    let currentMonth = 0;
    let totalPayment = 0;
    cards[0].focus();
    do {
      // pay off debt
      const currentPayment = this.payAllCards(cards, payment);
      totalPayment += currentPayment;

      // apply interest
      this.applyInterest(cards);

      // iterate time
      currentMonth++;

      // print state
      if (DEBUG) {
        for (const card of cards) {
          card.prettyPrint()
        }
      }
    } while (!this.allDebtsPaid(cards) && currentMonth < this.maxMonths);

    const results = {
      totalMonths: currentMonth,
      totalPayment,
    }
    return results;
  }

  public computeInterest(creditCards: CreditCard[], monthlyPayment: number) {

    let currentCardIndex = 0;
    let results = [];
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
      ccCopy[currentCardIndex].balance -= monthlyPayment;
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

    } while (totalBalance > 0 && year < startYear + 40 && currentCardIndex < ccCopy.length);



    // apply to graph
    for (var key of Object.keys(cardMap)) {
      results.push({name: key, series: cardMap[key]});
    }

    return results;
  }
}
