import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
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
  bots: Bot[] = [];
  currBot?: Bot;
  @ViewChild('messageInput') messageInput!: ElementRef<HTMLInputElement>;

  constructor (private route: ActivatedRoute, private router: Router, private store: Store<AppState>, private cdr: ChangeDetectorRef, private http: HttpClient) {
    this.bots$ = store.select(state => state.bots);
  }

  ngOnInit() {
    this.handleUrlChanges();
  }

  sendMessage() {
    const userMessage: Message = {
      bot: false,
      content: this.messageInput.nativeElement.value
    };

    this.store.dispatch(addMessage({message: userMessage, botIndex: this.bots.indexOf(this.currBot!)}))

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
      this.bots = bots;
      this.saveToLocal(bots);
      this.currBot = bots.find(bot => bot.name.toLowerCase() === url);
      if (!this.currBot) this.router.navigate(['sarah']);
      else if (
        this.currBot.messages.length > 0 && 
        !this.currBot.messages[this.currBot.messages.length - 1].bot
      ) {
        this.getBotAnswer(bots, bots.indexOf(this.currBot));
      }
    });
  }

  getBotAnswer(bots: Bot[], botIndex: number) {
    // const url = 'https://chitchat-ai.herokuapp.com';
    const url = 'http://localhost:3001';
    this.http.post<any>(url, {identity: bots[botIndex].description, messages: bots[botIndex].messages.slice(-5)}).subscribe(
      (response: Message) => {
        this.store.dispatch(addMessage({ message: response, botIndex: botIndex }));
      }
    );
  }

  saveToLocal(bots: Bot[]) {
    localStorage.setItem('bots', JSON.stringify(bots));
  }
}
