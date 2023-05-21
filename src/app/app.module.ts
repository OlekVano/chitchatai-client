import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BotSmallComponent } from './bot-small/bot-small.component';
import { BotBigComponent } from './bot-big/bot-big.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    NavigationComponent,
    BotSmallComponent,
    BotBigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
