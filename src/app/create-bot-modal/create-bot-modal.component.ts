import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { addBot } from '../state/bots.actions';
import { v4 as uuidv4 } from 'uuid';
import { AppState } from '../state/state.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-bot-modal',
  templateUrl: './create-bot-modal.component.html',
  styleUrls: ['./create-bot-modal.component.less']
})
export class CreateBotModalComponent {
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('fullDescriptionInput') fullDescriptionInput!: ElementRef<HTMLInputElement>;
  @ViewChild('summaryInput') summaryInput!: ElementRef<HTMLTextAreaElement>;

  @Output() closeModalEvent: EventEmitter<null> = new EventEmitter();

  constructor (private store: Store<AppState>) {}

  createBot() {
    this.store.dispatch(addBot({ bot: {
      id: uuidv4(),
      avatar: '/assets/images/robot.png',
      description: `My name is ${this.nameInput.nativeElement.value}. ${this.summaryInput.nativeElement.value} ${this.fullDescriptionInput.nativeElement.value}`,
      messages: [],
      name: this.nameInput.nativeElement.value,
      summary: this.summaryInput.nativeElement.value
    }}));
    this.closeModalEvent.emit();
  }
}