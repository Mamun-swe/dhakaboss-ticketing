import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import UserNav from './nav/index';
import Home from './home/index';
import Footer from './footer/index';

class UserMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <UserNav />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default UserMaster;