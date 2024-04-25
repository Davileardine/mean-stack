export class Message {
  messageId?: string;
  content: string;
  userId?: number;
  username: string;

  constructor(content: string, username: string, messageId?: string, userId?: number) {
    this.messageId = messageId;
    this.content = content;
    this.userId = userId;
    this.username = username;
  }
}
