import {Component, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {MessagesService} from '../../services/messages.service';
import {Observer} from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [];
  unreadMessages: number | undefined;

  messagesObserver: Observer<Message[]> = {
    next: messages => {
      this.messages = messages;
      this.unreadMessages = messages
        .filter(message => message.read).length; // It's possible to use retrieved values to initialize other attributes
    },
    error: err => console.error(err), // Catch any error
    complete: () => console.log('Unread messages: ' + this.unreadMessages), // When we finally retrieved all values from the Observer
  };

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit(): void {
    this.messagesService.getMessages() // Return type : Observable<Message[]> (fetch data from an api)
      .subscribe(this.messagesObserver); // Observer subscribe to the Observable to initialize the list of messages
  }
}
