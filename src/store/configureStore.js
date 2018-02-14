import {createStore, combineReducers} from 'redux';
import Messages_Reducer from '../reducers/Messages_Reducer';


export default () => {
  const store = createStore(
    combineReducers({      
      chat_messages: Messages_Reducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}