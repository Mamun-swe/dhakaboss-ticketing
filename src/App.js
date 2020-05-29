import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';


import Home from './components/user/home/index';
import Transports from './components/user/transports/index';
import BusBook from './components/user/bus-book/index';
import Checkout from './components/user/checkout/index'; 

import AdminMaster from './components/admin/master';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/transports" component={Transports} />
          <Route exact path="/book/:transportId" component={BusBook} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/admin" component={AdminMaster} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
