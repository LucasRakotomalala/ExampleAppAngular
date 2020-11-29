import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input()
  message: Message | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  formatDate(date: string): string {
    return new Date(date).getHours() + ':' + String(new Date(date).getMinutes()).padStart(2, '0');
  }
}
