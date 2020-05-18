import React, { Component } from 'react';
import './index.css';


import UserNav from '../nav/index';
import Footer from '../footer/index';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="book">
                <UserNav />

                <h1>book</h1>

                <Footer />
            </div>
        );
    }
}

export default Book;