import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bot } from '../state/bots.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent {
  bots$: Observable<Bot[]>;
  currBot?: Bot;

  constructor (private route: ActivatedRoute, private router: Router, private store: Store<{bots: Bot[]}>, private cdr: ChangeDetectorRef) {
    this.bots$ = store.select(state => state.bots);
  }

  ngOnInit() {
    this.route.url.subscribe((segments) => {
      const url = segments.map(segment => segment.path).join('/');
      this.bots$.subscribe((bots: Bot[]) => {
        this.currBot = bots.find(bot => bot.name.toLowerCase() === url);
        if (this.currBot) return;
        this.router.navigate(['sarah']);
      });
      this.cdr.detectChanges();
    })
  }
}
