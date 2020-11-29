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


  messagesObserver: Observer<Message[]> = {
    next: messages => {
      this.messages = messages;
      this.unreadMessages = messages.filter(message => message.read).length;
    },
    error: err => console.error(err),
    complete: () => console.log('Unread messages: ' + this.unreadMessages),
  };

  messages: Message[] = [];
  unreadMessages: number | undefined;

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit(): void {
    this.messagesService.getMessages().subscribe(this.messagesObserver);
  }

}
