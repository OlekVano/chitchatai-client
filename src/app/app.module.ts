import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BotSmallComponent } from './bot-small/bot-small.component';
import { BotBigComponent } from './bot-big/bot-big.component';
import { StoreModule } from '@ngrx/store';
import { objectReducer } from './state/state.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    NavigationComponent,
    BotSmallComponent,
    BotBigComponent,
  ],
  imports: [
    StoreModule.forRoot({ objects: objectReducer}),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
