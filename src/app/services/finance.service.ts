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

  /** represents the max amount of months we will make calculations
   *  the assumption is that you should never need 40 years to pay off cc debt
   */
  public maxMonths = 40 * 12;
  constructor() { }

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

  private calculateInterest(balance: number, interest: number): number {
    const apr = interest / 100;
    return balance * (apr / 12);
  }

  public calculatePayoff(creditCards: CreditCard[], payment: number) {

    const cards = this.constructCardObjs(creditCards);
    let currentMonth = 0;
    let totalPayment = 0;
    let metrics = {};
    cards[0].focus();
    let remainingMoney = 0;
    do {
      for (const card of cards) {

        let interest = 0;
        let principal = 0;
        if (!card.isPaidOff()) {
          // calculate interest
          interest = this.calculateInterest(card.balance, card.interest);
          card.interestAccrued += interest;

          // calcualte monthly payment
          if (card.focused) {
            principal = payment;
          } else {
            principal = card.minimumPayment;
          }

          principal -= interest;

          // add remaining money from last payments to payment amount and
          // remove from remainingMoney. We will add the remainder of this
          // transaction back into the remainingMoney pot.
          principal += remainingMoney;
          remainingMoney -= remainingMoney;

          const leftOver = card.balance - principal;
          if (leftOver < 0) {
            remainingMoney = -leftOver;
            principal -= remainingMoney;
          }

          // calculate leftover balance
          card.balance = card.balance - principal;

          // determine if another card needs to become the new focus card after a
          // payment
          this.findAndFocusCard(cards);
        }

        // add metrics per card for data tables in the component
        if (!metrics.hasOwnProperty(card.name)) {
          metrics[card.name] = [];
        }

        metrics[card.name].push({
          month: currentMonth,
          interest,
          payment,
          principal,
          balance: card.balance,
          interestAccrued: card.interestAccrued,
        });
      }

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
      metrics,
    }

    return results;
  }
}
