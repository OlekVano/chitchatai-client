import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { Bot } from '../state/bots.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements AfterViewChecked {
  @Input() bot!: Bot;

  private hasScrolled = false;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngAfterViewChecked() {
    const element = this.elementRef.nativeElement;
    this.renderer.setProperty(element, 'scrollTop', element.scrollHeight);
  }
}
