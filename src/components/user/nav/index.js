import React, { Component } from 'react';
import './index.css';
import Logo from '../../../assets/static/logo.png';
import { Link } from 'react-router-dom';
import $ from 'jquery';


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    openMenu() {
        $('.side-menu').css('right', "0%");
    }

    closeMenu() {
        $('.side-menu').removeClass('open-side-menu');
    }
    render() {
        return (
            <div className="home-nav">
                {/* Top Nav */}
                <div className="nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Link to="/">
                                            <img src={Logo} className="img-fluid" alt="Company Logo" />
                                        </Link>
                                    </div>
                                    <div className="d-none d-lg-block">
                                        <ul>
                                            <li><Link to="/">buses</Link></li>
                                            <li><Link to="/">train</Link></li>
                                            <li><Link to="/">flight</Link></li>
                                        </ul>
                                    </div>
                                    <div className="d-none d-lg-block">
                                        <ul>
                                            <li><Link to="/">Login</Link></li>
                                            <li><Link to="/">Create an account</Link></li>
                                        </ul>
                                    </div>
                                    <div className="d-lg-none">
                                        <i className="fas fa-bars menu-bar" onClick={this.openMenu}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Top Nav */}

                {/* Side Menu */}
                <div className="side-menu">
                    <div className="close-section text-left">
                        <span className="close-icon" onClick={this.closeMenu}>&times;</span>
                    </div>
                </div>
                {/* End Side Menu */}
            </div>
        );
    }
}

export default Nav;