class ChatMessageClass {
  constructor(message, sender) {
    this._id = Math.floor(Date.now());
    this.message = message;
    this.sender = sender;
  }
}

export default ChatMessageClass;