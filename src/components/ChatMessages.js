import React from 'react';

class ChatMessages extends React.Component {
  render(props) {
    return (
      <div>              
        <div>
          <div className="chat-activity-list">
            <div className="chat-element">
              <a href="#" className="pull-left">
                <img alt="image" className="img-circle" src="img/a2.jpg" />
              </a>
              <div className="media-body ">
                <small className="pull-right text-navy">1m ago</small>
                  <strong>Mike Smith</strong>
                    <p className="m-b-xs">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </p>
                    <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
              </div>
            </div>

            <div className="chat-element right">
              <a href="#" className="pull-right">
                <img alt="image" className="img-circle" src="img/a4.jpg" />
              </a>
              <div className="media-body text-right ">
                <small className="pull-left">5m ago</small>
                <strong>John Smith</strong>
                <p className="m-b-xs">
                    Lorem Ipsum is simply dummy text of the printing.
                </p>
                <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
              </div>
            </div>

            <div className="chat-element ">
              <a href="#" className="pull-left">
                <img alt="image" className="img-circle" src="img/a2.jpg" />
              </a>
              <div className="media-body ">
                <small className="pull-right">2h ago</small>
                <strong>Mike Smith</strong>
                <p className="m-b-xs">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                </p>
                <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
              </div>
            </div>

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