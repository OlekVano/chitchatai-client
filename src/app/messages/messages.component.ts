import { AfterViewChecked, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { Bot } from '../state/bots.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements AfterViewChecked {
  @Input() bot!: Bot;
  @Input() waiting!: boolean;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngAfterViewChecked() {
    const element = this.elementRef.nativeElement;
    this.renderer.setProperty(element, 'scrollTop', element.scrollHeight);
  }
}
