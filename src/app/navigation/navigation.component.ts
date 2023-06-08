import { ChangeDetectorRef, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
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

  constructor(private store: Store<AppState>, private router: Router, private cdr: ChangeDetectorRef) {
    this.bots$ = store.select(state => state.bots);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedBot = event.url.substring(1);
        this.cdr.detectChanges();
      }
    })
  }
}
