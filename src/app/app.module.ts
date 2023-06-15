import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BotSmallComponent } from './bot-small/bot-small.component';
import { BotBigComponent } from './bot-big/bot-big.component';
import { StoreModule } from '@ngrx/store';
import { botsReducer } from './state/bots.reducer';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';
import { LoadingDotsComponent } from './loading-dots/loading-dots.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavigationComponent,
    BotSmallComponent,
    BotBigComponent,
    MessagesComponent,
    MessageComponent,
    LoadingDotsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({bots: botsReducer}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
