import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MessageComponent} from './components/message/message.component';
import {HttpClientModule} from '@angular/common/http';
import {MessagesComponent} from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
