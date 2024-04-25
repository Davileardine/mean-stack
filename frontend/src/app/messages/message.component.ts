import {Component, EventEmitter, input, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Message} from "./message.model";
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MessageService} from "./message.services";

@Component({
  selector: "app-message",
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})

export class MessageComponent {
  messageVarClass = input<Message>(new Message("", ""))

  @Output() outputMessage = new EventEmitter<string>();

  constructor(private  messageService: MessageService) {
  }

  onEdit() {
    this.outputMessage.emit('Texto retornado: venho de message (child) para app (parent)');
  }

  onDelete() {
    this.messageService.deleteMessage(this.messageVarClass());
  }
}
