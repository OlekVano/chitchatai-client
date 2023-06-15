import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { Bot } from '../state/bots.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bot-small',
  templateUrl: './bot-small.component.html',
  styleUrls: ['./bot-small.component.less']
})
export class BotSmallComponent {
  @Input() bot!: Bot;
}
