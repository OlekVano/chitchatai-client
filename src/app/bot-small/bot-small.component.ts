import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Bot } from 'src/types';

@Component({
  selector: 'app-bot-small',
  templateUrl: './bot-small.component.html',
  styleUrls: ['./bot-small.component.less']
})
export class BotSmallComponent {
  @Input() bot!: Bot;
  @Input() selected!: boolean;

  constructor(private router: Router) {}

  @HostBinding('class.selected')
  get hostClass(): boolean {
    return this.selected
  }

  @HostListener('click')
  onClick() {
    this.router.navigate([`${this.bot.name.toLowerCase()}`]);
  }
}
