import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { addMessage } from '../actions/Messages_Action';
import MessageItem_Left from './MessageItem_Left';
import MessageItem_Right from './MessageItem_Right';
import ChatMessageClass from '../helpers/ChatMessage_Class';

class ChatMessages extends React.Component {  
  state = {
    user_message: ''
  }

  onUserMessageChange = (e) => {
    let text = e.target.value;
    this.setState({user_message: text});
  }

  onSubmit = (e) => {
    e.preventDefault();

    // Construct message object
    const objMessage = new ChatMessageClass(this.state.user_message, 'user');
    
    // Dispatch message to redux
    this.props.dispatch(addMessage(objMessage));

    // Get dialogflow's response against user's message
    this.getResponseFromDialogflow(this.state.user_message);

    // Reset message input field
    this.setState({user_message: ""});
  }

  getResponseFromDialogflow = (message) => {
    axios.post('http://localhost:3000/dialogflow', {email: "mohsin@yahoo.com", message: message})
      .then((response) => {
        const objMessage = new ChatMessageClass(response.data.message, 'bot');
        this.props.dispatch(addMessage(objMessage));        
      });    
  }
  
  render(props) {    
    return (
      <div>
        <div>          
          <div className="chat-activity-list">             
            
            {
              this.props.chat_messages.length > 0 && this.props.chat_messages.map((msg) => {
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
          <form role="form" onSubmit={this.onSubmit}>
            <div className="form-group">
              <input name='txtUserMessage' className="form-control" placeholder="Message" value={this.state.user_message} onChange={this.onUserMessageChange} />
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

const mapStateToProps = (state) => {
  return {
    chat_messages: state.chat_messages
  }
}

export default connect(mapStateToProps)(ChatMessages);