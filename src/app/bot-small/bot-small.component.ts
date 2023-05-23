import { Component, Input } from '@angular/core';
import { Bot } from '../bots.model';

@Component({
  selector: 'app-bot-small',
  templateUrl: './bot-small.component.html',
  styleUrls: ['./bot-small.component.less']
})
export class BotSmallComponent {
  @Input() bot!: Bot;
}
