import { Component, Input } from '@angular/core';
import { Bot } from '../state/bots.model';

@Component({
  selector: 'app-bot-big',
  templateUrl: './bot-big.component.html',
  styleUrls: ['./bot-big.component.less']
})
export class BotBigComponent {
  @Input() bot!: Bot;
}
