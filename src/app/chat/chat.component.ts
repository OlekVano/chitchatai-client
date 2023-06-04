import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, OnChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bot, Message } from '../state/bots.model';
import { AppState } from '../state/state.model';
import { addMessage } from '../state/bots.actions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {
  bots$: Observable<Bot[]>;
  currBot?: Bot;
  @ViewChild('messageInput') messageInput!: ElementRef<HTMLInputElement>;

  constructor (private route: ActivatedRoute, private router: Router, private store: Store<AppState>, private cdr: ChangeDetectorRef) {
    this.bots$ = store.select(state => state.bots);
  }

  ngOnInit() {
    this.handleUrlChanges();
  }

  sendMessage() {
    const userMessage: Message = {
      author: 'user',
      content: this.messageInput.nativeElement.value
    };

    this.store.dispatch(addMessage({message: userMessage, botName: this.currBot!.name}))



    this.messageInput.nativeElement.value = '';
  }

  handleUrlChanges() {
    this.route.url.subscribe((segments) => {
      const url = segments.map(segment => segment.path).join('/');
      this.handleBotsChanges(url);
      this.cdr.detectChanges();
    });
  }

  handleBotsChanges(url: string) {
    this.bots$.subscribe((bots: Bot[]) => {
      console.log('Bots changed');
      this.currBot = bots.find(bot => bot.name.toLowerCase() === url);
      if (this.currBot) return;
      this.router.navigate(['sarah']);
    });
  }
}
