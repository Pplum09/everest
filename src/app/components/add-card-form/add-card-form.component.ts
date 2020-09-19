import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CreditCard} from 'src/app/models/credit-card.model';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-card-form',
  templateUrl: './add-card-form.component.html',
  styleUrls: ['./add-card-form.component.scss'],
})
export class AddCardFormComponent implements OnInit {

  @Input() creditCards: CreditCard[];
  @Output() creditCardsChange: EventEmitter<CreditCard[]> = new EventEmitter();
  @Output() cardCreated: EventEmitter<any> = new EventEmitter();

  public creditCardForm = new FormGroup({
    name: new FormControl('', Validators.required),
    balance: new FormControl('', Validators.required),
    interest: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  public addCard(): void {
    if (this.creditCardForm.valid) {
      this.creditCards.push({
        name: this.creditCardForm.value.name,
        balance: parseInt(this.creditCardForm.value.balance),
        interest: parseInt(this.creditCardForm.value.interest),
      });

      this.creditCardForm.reset();
      this.creditCardsChange.emit([...this.creditCards]);
      this.cardCreated.emit();
    }
  }
}
