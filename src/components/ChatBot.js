import React from 'react';
import ChatMessages from './ChatMessages';

class ChatBot extends React.Component {
  
  state = {
    email: ''
  }

  onEmailChange = (e) => {    
    const email = e.target.value;
    this.setState({email});
  }

  onSubmit = (e) => {
    e.preventDefault();    
  }

  render(props) {
    return (
      <div>
        <div className="row  border-bottom white-bg dashboard-header">
          <div className="col-sm-1">

          </div>
          <div className="col-sm-6">
            <div className="jumbotron">          
              <form onSubmit={this.onSubmit}>
                <h1>
                  <input type="text" name='txtEmail' placeholder='Email' value={this.state.email} onChange={this.onEmailChange} />
                </h1>
              </form>
            </div>

          </div>
          <div className="col-sm-1">  </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-6">
            <div className="ibox">
              <div className="ibox-content">
                <ChatMessages messages={this.state.email} />
              </div>
            </div>
          </div>
        </div> {/* END Row */}
      </div>
    )
  }  
}

export default ChatBot;