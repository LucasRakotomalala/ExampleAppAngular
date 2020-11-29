import {Injectable} from '@angular/core';
import {Message} from '../models/message.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public messages$: Observable<Message[]>;

  private url = 'https://my-json-server.typicode.com/LucasRakotomalala/ExampleAppAngular/db';

  constructor(private http: HttpClient) {
    this.messages$ = this.http.get<Message[]>(this.url);
  }

  getMessages(): Observable<Message[]> {
    return this.messages$;
  }
}
