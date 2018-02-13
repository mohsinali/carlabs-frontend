import React from 'react';

class MessageItem_Left extends React.Component {
  render(props){
    return (
      <div className={"chat-element right"}>
        <a href="#" className="pull-left">
          <img alt="image" className="img-circle" src="/images/a4.jpg" />
        </a>
        <div className="media-body">
          <small className="pull-right text-navy">1m ago</small>
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

export default MessageItem_Left;