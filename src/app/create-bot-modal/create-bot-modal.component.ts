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
  @ViewChild('descriptionInput') descriptionInput!: ElementRef<HTMLInputElement>;
  @ViewChild('summaryInput') summaryInput!: ElementRef<HTMLTextAreaElement>;

  @Output() closeModalEvent: EventEmitter<null> = new EventEmitter();

  constructor (private store: Store<AppState>) {}

  createBot() {
    const name = this.nameInput.nativeElement.value.trim();
    const summary = this.summaryInput.nativeElement.value.trim();
    const description = this.descriptionInput.nativeElement.value.trim();

    if (name.length === 0 || summary.length === 0 || description.length === 0) {
      alert('You must fill in all the fields.');
      return;
    }

    this.store.dispatch(addBot({ bot: {
      id: uuidv4(),
      avatar: '/assets/images/robot.png',
      description: `My name is ${name}. ${summary} ${description}`,
      messages: [],
      name: name,
      summary: summary
    }}));

    this.closeModalEvent.emit();
  }
}