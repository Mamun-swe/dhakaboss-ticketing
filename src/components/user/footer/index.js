import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="footer">
                <div className="container pt-5 pb-3">
                    <div className="row mb-4">

                        <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <h5 className="mb-3">On the go</h5>
                            <ul>
                                <li><Link to="/">Buses</Link></li>
                                <li><Link to="/">Train</Link></li>
                                <li><Link to="/">Flight</Link></li>
                                <li><Link to="/">Your bookings</Link></li>
                                <li><Link to="/">Create an account</Link></li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <h5 className="mb-3">In the office</h5>
                            <ul>
                                <li><Link to="/">About us</Link></li>
                                <li><Link to="/">Careers</Link></li>
                                <li><Link to="/">Flight</Link></li>
                                <li><Link to="/">Became a partner</Link></li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <h5 className="mb-3">Need our help?</h5>
                            <ul>
                                <li><Link to="/">Go help center</Link></li>
                                <li><Link to="/">Term & condition</Link></li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 social">
                            <h5 className="mb-3">Follow us</h5>
                            <ul>
                                <li><a target="_blank" href="/"><i className="rounded-circle fab fa-facebook-f"></i></a></li>
                                <li><a target="_blank" href="/"><i className="rounded-circle fab fa-linkedin-in"></i></a></li>
                                <li><a target="_blank" href="/"><i className="rounded-circle fab fa-instagram"></i></a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12 copyright text-center">
                            <p className="mb-0">Copyright ©2020. <a href="https://www.dhakaboss.com">Dhakaboss.com</a> All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;