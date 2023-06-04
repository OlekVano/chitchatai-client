import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BotSmallComponent } from './bot-small/bot-small.component';
import { BotBigComponent } from './bot-big/bot-big.component';
import { StoreModule } from '@ngrx/store';
import { botsReducer } from './state/bots.reducer';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    NavigationComponent,
    BotSmallComponent,
    BotBigComponent,
    MessagesComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({bots: botsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
