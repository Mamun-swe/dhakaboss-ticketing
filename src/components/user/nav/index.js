import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import Logo from '../../../assets/static/logo.png';
import BarIcon from '../../../assets/icons/bar.png';
import BusIcon from '../../../assets/icons/bus.png';
import TrainIcon from '../../../assets/icons/train.png';
import FlightIcon from '../../../assets/icons/flight.png';
import CreateUserIcon from '../../../assets/icons/user-add.png';
import LoginIcon from '../../../assets/icons/login.png';
import LogoutIcon from '../../../assets/icons/logout.png';


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    openMenu() {
        $('.side-menu').css('right', "0%");
    }

    closeMenu() {
        $('.side-menu').css('right', "-100%");
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
                                    <div className="d-lg-none menu-bar">
                                        <img src={BarIcon} alt="Menu bar icon" onClick={this.openMenu} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Top Nav */}

                {/* Side Menu */}
                <div className="side-menu d-lg-none">
                    <div className="close-section text-left">
                        <span className="close-icon" onClick={this.closeMenu}>&times;</span>
                    </div>
                    <ul>
                        <li><Link to="/"><img src={BusIcon} alt="Bus Icon" />buses</Link></li>
                        <li><Link to="/"><img src={TrainIcon} alt="Train Icon" />train</Link></li>
                        <li><Link to="/"><img src={FlightIcon} alt="Plan Icon" />flight</Link></li>
                        <li><Link to="/"><img src={CreateUserIcon} alt="User Create Icon" />create an account</Link></li>
                        <li><Link to="/"><img src={LoginIcon} alt="User Login Icon" />login</Link></li>
                        <li><Link to="/"><img src={LogoutIcon} alt="User Logout Icon" />logout</Link></li>
                    </ul>
                </div>
                {/* End Side Menu */}
                <div className="break"></div>
            </div>
        );
    }
}

export default Nav;