import {createStore, combineReducers} from 'redux';
import Messages_Reducer from '../reducers/Messages_Reducer';
import Email_Reducer from '../reducers/Email_Reducer';


export default () => {
  const store = createStore(
    combineReducers({      
      email: Email_Reducer,
      chat_messages: Messages_Reducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}