import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bot } from '../state/bots.model';
import { NavigationEnd, Router } from '@angular/router';
import { AppState } from '../state/state.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
})
export class NavigationComponent {
  bots$: Observable<Bot[]>;
  selectedBot: string = '';

  @Output() closeMobileMenuEvent: EventEmitter<Event> = new EventEmitter();

  constructor(private store: Store<AppState>, private router: Router) {
    this.bots$ = store.select(state => state.bots);
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.selectedBot = this.router.url.split('/')[1];
      }
    });
  }

  closeMobileMenu(event: Event) {
    this.closeMobileMenuEvent.emit(event);
  }
}
