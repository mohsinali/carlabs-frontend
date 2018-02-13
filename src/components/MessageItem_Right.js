import React from 'react';

class MessageItem_Right extends React.Component {
  render(props){
    return (
      <div className="chat-element right">
        <a href="#" className="pull-right">
          <img alt="image" className="img-circle" src="/images/a2.jpg" />
        </a>
        <div className="media-body text-right ">
          <small className="pull-left">5m ago</small>
          <strong>{this.props.msg.sender == 'user' ? "User" : "Bot"}</strong>
          <p className="m-b-xs">
              {this.props.msg.message}
          </p>
          <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
        </div>
      </div>
    )
  }
}

export default MessageItem_Right;