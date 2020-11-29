import {Component, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {MessagesService} from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  public messages: Message[] = [];
  unreadMessages: number | undefined;

  constructor(private messagesService: MessagesService) {
    this.messagesService.getMessages().subscribe({
        next: (messages) => {
          this.messages = messages;
          this.unreadMessages = messages.filter(message => message.read).length;
        },
        complete: () => {
          console.log('Unread messages: ' + this.unreadMessages);
        },
      }
    );
  }

  ngOnInit(): void {
  }

}
