import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Bot, Message } from '../state/bots.model';
import { AppState } from '../state/state.model';
import { addMessage } from '../state/bots.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  bots$: Observable<Bot[]>;
  bots: Bot[] = [];
  currBot?: Bot;
  waiting: boolean = false;
  mobileNavigationShown = false;
  botsSubscription?: Subscription;
  urlSubscription?: Subscription;
  @ViewChild('messageInput') messageInput!: ElementRef<HTMLInputElement>;

  constructor (private route: ActivatedRoute, private router: Router, private store: Store<AppState>, private cdr: ChangeDetectorRef, private http: HttpClient) {
    this.bots$ = store.select(state => state.bots);
  }

  ngOnInit() {
    this.urlSubscription = this.handleUrlChanges();
  }

  ngOnDestroy() {
    this.urlSubscription?.unsubscribe();
  }

  toggleMobileMenu() {
    this.mobileNavigationShown = !this.mobileNavigationShown;
  }

  handleEnterKey() {
    this.sendMessage();
  }

  sendMessage() {
    if (this.messageInput.nativeElement.value.length === 0 || this.waiting) return;

    const userMessage: Message = {
      bot: false,
      content: this.messageInput.nativeElement.value.trim()
    };

    this.store.dispatch(addMessage({message: userMessage, botIndex: this.bots.indexOf(this.currBot!)}))

    this.messageInput.nativeElement.value = '';
  }

  handleUrlChanges() {
    return this.route.url.subscribe((segments) => {
      const url = segments.map(segment => segment.path).join('/');
      this.botsSubscription?.unsubscribe();
      this.handleBotsChanges(url);
      this.cdr.detectChanges();
    });
  }

  handleBotsChanges(url: string) {
    this.botsSubscription = this.bots$.subscribe((bots: Bot[]) => {
      this.bots = bots;
      this.saveToLocal(bots);
      this.currBot = bots.find(bot => bot.id === url);
      if (!this.currBot) this.router.navigate(['sarah']);
      else if (
        this.currBot.messages.length > 0 && 
        !this.currBot.messages[this.currBot.messages.length - 1].bot
      ) {
        this.getBotAnswer(bots, bots.indexOf(this.currBot));
        this.waiting = true;
      }
      else {
        this.waiting = false;
      }
    });
  }

  getBotAnswer(bots: Bot[], botIndex: number) {
    const url = 'https://chitchatai-server.herokuapp.com';
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
