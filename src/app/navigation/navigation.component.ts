import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bot } from '../bots.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
})
export class NavigationComponent {
  bots$: Observable<Bot[]>;

  constructor(private store: Store<{bots: Bot[]}>) {
    this.bots$ = store.select(state => state.bots);
  }
}
