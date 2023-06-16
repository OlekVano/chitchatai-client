import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-create-bot-button',
  templateUrl: './create-bot-button.component.html',
  styleUrls: ['./create-bot-button.component.less']
})
export class CreateBotButtonComponent {
  @Output() openCreateBotModalEvent: EventEmitter<null> = new EventEmitter();

  @HostListener('click')
  onClick() {
    this.openCreateBotModalEvent.emit();
  }
}