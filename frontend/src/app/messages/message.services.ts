import {Injectable, inject} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map } from "rxjs";

import {Message} from "./message.model";

@Injectable()
export class MessageService {

  private baseUrl = "http://localhost:3000";

  private messageService: Message[] = [];

  private http = inject(HttpClient);

  errorHandler(e: any, info: string): Observable<any>{
    throw({
      info_extra: info,
      error_SS: e,
      error_CS: "Client-side: errorHandler: Deu ruim!"
    })
  }

  addMessage(message: Message): Observable<any> {
    this.messageService.push(message);

    return this.http.post<any>(`${this.baseUrl}/messages`, message).pipe(
      catchError((e) => this.errorHandler(e, "addMessage()"))
    );
  }

  deleteMessage(message: Message) {
    this.messageService.splice(this.messageService.indexOf(message), 1);
  }

  getMessages() {
    return this.messageService;
  }
}
