import { Component, Input } from '@angular/core';
import { Bot } from '../state/bots.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent {
  @Input() bot!: Bot;
}
