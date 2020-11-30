import {Injectable} from '@angular/core';
import {Message} from '../models/message.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  url = 'https://my-json-server.typicode.com/LucasRakotomalala/ExampleAppAngular/';
  messagesUrl = this.url + 'messages';

  messages$: Observable<Message[]>;

  constructor(private http: HttpClient) {
    this.messages$ = this.http.get<Message[]>(this.messagesUrl);
  }

  getMessages(): Observable<Message[]> {
    return this.messages$;
  }
}
