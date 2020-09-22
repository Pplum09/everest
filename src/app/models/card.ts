export class Card {
  balance: number;
  interest: number;
  dailyInterest: number;
  name: string;
  focused: boolean;
  minimumPayment: number;
  interestAccrued: number;

  constructor(balance: number, interest: number, name: string, minimumPayment: number) {
    this.balance = balance;
    this.interest = interest;
    this.name = name;
    this.focused = false;
    this.dailyInterest = this.interest / 100 / 365;
    this.minimumPayment = minimumPayment;
    this.interestAccrued = 0;
  }

  public applyInterest(): void {
    this.balance = (30 * this.balance * this.dailyInterest) + this.balance;
  }

  public isPaidOff(): boolean {
    return this.balance <= 0;
  }

  public applyPayment(payment: number): void {
    if (this.balance > 0) {
      this.balance -= payment;
      if (this.balance <= 0) {
        this.balance = 0;
      }
    }
  }

  public prettyPrint(): void {
    console.log(`name: ${this.name}, balance: ${this.balance}, focused: ${this.focused}`);
  }

  public focus(): void {
    this.focused = true;
  }

  public unfocus(): void  {
    this.focused = false;
  }
}
