import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bot } from 'src/types';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent {
  constructor(private route: ActivatedRoute) {}
}
