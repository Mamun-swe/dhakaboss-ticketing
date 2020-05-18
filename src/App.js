import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Home from './components/user/home/index';
import Transports from './components/user/transports/index';
import Book from './components/user/book/index';

import AdminMaster from './components/admin/master';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/transports" component={Transports} />
          <Route exact path="/book/:transportId" component={Book} />
          <Route path="/admin" component={AdminMaster} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
