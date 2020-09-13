import {Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CreditCard } from '../../models/credit-card.model';

@Component({
  selector: 'app-cred-card-list',
  templateUrl: './cred-card-list.component.html',
  styleUrls: ['./cred-card-list.component.scss'],
})
export class CredCardListComponent implements OnInit {

  @Input() creditCards: CreditCard[];
  @Output() creditCardsChange: EventEmitter<CreditCard[]> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public remove(index: number): void {
    this.creditCards.splice(index, 1);
    this.creditCardsChange.emit([...this.creditCards]);
  }
}
