import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ChatBot from '../components/ChatBot';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404!</h1>
    </div>
  )
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={ChatBot} exact={true} />        
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter;

