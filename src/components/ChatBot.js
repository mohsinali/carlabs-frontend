import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Simplert from 'react-simplert';
import renderIf from 'render-if';

import ChatMessages from './ChatMessages';
import { addMessage } from '../actions/Messages_Action';
import { setEmail } from '../actions/Email_Action';
import axios from 'axios';

class ChatBot extends React.Component {
  
  state = {
    email: '',
    showAlert: false,
    typeAlert: "",
    titleAlert: "",
    messageAlert: ""
  }

  handleAddMessage = (message) => {
    this.props.dispatch(addMessage(message));
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState({email, showAlert: false});
  }

  createUser = (email) => {
    axios.post("http://localhost:3000/users", {email}).then((response) => {
      if(response.data.error){
        console.log(response.data.message);        
      }else{        
        this.setState({
              showAlert: true, 
              titleAlert: "New User", 
              typeAlert: "success", 
              messageAlert: "Your account has been created. You can check the weather now :)"
            });
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    // Store email address in redux store
    this.props.dispatch(setEmail(this.state.email));

    // Get users info from server
    axios.get('http://localhost:3000/users/' + this.state.email)
      .then(response => {        
        if(response.data.error){
          console.log(response.data.message);
          this.createUser(this.state.email);
        }else{
          // Initialize Redux store with existing chat messages
          _.forEach(response.data.user.chats, (chat) => {
            this.handleAddMessage(chat);    
          });
        }

      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
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
        
        {renderIf(this.props.email)(
          <div className="row">
            <div className="col-lg-6">
              <div className="ibox">
                <div className="ibox-content">                              
                  <ChatMessages />              
                </div>
              </div>
            </div>
          </div>
        )}

        <Simplert
          showSimplert={ this.state.showAlert }
          type={ this.state.typeAlert }
          title={ this.state.titleAlert }
          message={ this.state.messageAlert }                
          />
      </div>
    )
  }  
}
const mapStateToProps = (state) => {
  return {
    chat_messages: state.chat_messages,
    email: state.email
  }
}

export default connect(mapStateToProps)(ChatBot);