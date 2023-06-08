import { Component, HostBinding, Input } from '@angular/core';
import { Message } from '../state/bots.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent {
  @Input() text!: string;
  @Input() avatar!: string;
  @Input() @HostBinding('class.right') right!: boolean;
}
