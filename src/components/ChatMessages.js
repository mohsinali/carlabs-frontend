import React from 'react';
import MessageItem_Left from './MessageItem_Left';
import MessageItem_Right from './MessageItem_Right';

class ChatMessages extends React.Component {  
  render(props) {
    
    return (
      <div>
        <div>          
          <div className="chat-activity-list">             
            {
              this.props.chats.length > 0 && this.props.chats.map((msg) => {
                if(msg.sender === 'user'){
                  return <MessageItem_Left key={msg._id} msg={msg} />;
                }else{
                  return <MessageItem_Right key={msg._id} msg={msg} />;
                }
              })             
            }
          </div>
        </div>
        
        <div className="chat-form">
          <form role="form">
            <div className="form-group">
              <textarea className="form-control" placeholder="Message"></textarea>
            </div>
            <div className="text-right">
              <button type="submit" className="btn btn-sm btn-primary m-t-n-xs"><strong>Send message</strong></button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatMessages;