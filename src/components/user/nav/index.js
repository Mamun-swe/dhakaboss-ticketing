import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import Logo from '../../../assets/static/logo.png';
import BarIcon from '../../../assets/icons/bar.png';
import BusIcon from '../../../assets/icons/bus.png';
import TrainIcon from '../../../assets/icons/train.png';
import FlightIcon from '../../../assets/icons/flight.png';
import CreateUserIcon from '../../../assets/icons/user-add.png';
import LoginIcon from '../../../assets/icons/login.png';
import LogoutIcon from '../../../assets/icons/logout.png';
import CloseIcon from '../../../assets/icons/close.png';


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            modalHeight: 410,
            login: true,
            registration: false,
            forgot: false
        }
    }

    openMenu() {
        $('.side-menu').css('right', "0%");
    }

    closeMenu() {
        $('.side-menu').css('right', "-100%");
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    showLogin = () => {
        this.setState({ login: true })
        this.setState({ registration: false })
        this.setState({ forgot: false })
        this.setState({ modalHeight: 410 })
    }

    showReg = () => {
        this.setState({ login: false })
        this.setState({ registration: true })
        this.setState({ forgot: false })
        this.setState({ modalHeight: 460 })
    }

    showForgot = () => {
        this.setState({ login: false })
        this.setState({ registration: false })
        this.setState({ forgot: true })
        this.setState({ modalHeight: 350 })
    }

    render() {
        const modalSettings = {
            animation: "fade",
            height: this.state.modalHeight,
            showCloseButton: false
        };

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
                                            <li><button className="btn shadow-none" onClick={this.show.bind(this)}>Login</button></li>
                                            <li><button className="btn shadow-none" onClick={this.show.bind(this)}>Create an account</button></li>
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
                        <li>
                            <button className="btn shadow-none" onClick={this.show.bind(this)}>
                                <img src={CreateUserIcon} alt="User Create Icon" />create an account
                            </button>
                        </li>
                        <li>
                            <button className="btn shadow-none" onClick={this.show.bind(this)}>
                                <img src={LoginIcon} alt="User Login Icon" />login
                            </button>
                        </li>
                        <li><Link to="/"><img src={LogoutIcon} alt="User Logout Icon" />logout</Link></li>
                    </ul>
                </div>
                {/* End Side Menu */}
                <div className="break"></div>
                {/* Modal */}
                <Rodal
                    className="auth-modal"
                    visible={this.state.visible}
                    onClose={this.hide.bind(this)}
                    {...modalSettings}>
                    <div className="text-center title pt-3 pb-4">
                        <div className="d-flex justify-content-between">
                            <div></div>
                            <div>
                                {this.state.login &&
                                    <h4>Login</h4>
                                }
                                {this.state.registration &&
                                    <h4>Registration</h4>
                                }
                                {this.state.forgot &&
                                    <h4>Forgot Password ?</h4>
                                }
                            </div>
                            <div>
                                <span className="close-icon" onClick={this.hide.bind(this)}>
                                    <img src={CloseIcon} alt="Close Modal" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {this.state.login &&
                        <div className="login px-2">
                            <form>
                                <div className="form-group mb-3">
                                    <small>Your email address</small>
                                    <input type="text" className="form-control shadow-none" placeholder="Enter e-mail" />
                                </div>

                                <div className="form-group mb-4">
                                    <small>Your password</small>
                                    <input type="password" className="form-control shadow-none" placeholder="Enter password" />
                                </div>

                                <div className="form-group mb-4">
                                    <button type="submit" className="btn btn-danger btn-block text-white shadow-none">Login</button>
                                </div>
                            </form>
                            <div className="links text-center">
                                <p onClick={this.showReg}>Don't have an account ?</p>
                                <p onClick={this.showForgot}>I forgot my password</p>
                            </div>
                        </div>
                    }

                    {this.state.registration &&
                        <div className="registration px-2">
                            <form>
                                <div className="row">
                                    <div className="col-6 pr-2">
                                        <div className="form-group mb-3">
                                            <small>First name</small>
                                            <input type="text" className="form-control shadow-none" placeholder="Enter first name" />
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2">
                                        <div className="form-group mb-3">
                                            <small>Last name</small>
                                            <input type="text" className="form-control shadow-none" placeholder="Enter last name" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group mb-3">
                                    <small>Your email address</small>
                                    <input type="text" className="form-control shadow-none" placeholder="Enter e-mail" />
                                </div>

                                <div className="form-group mb-4">
                                    <small>Your password</small>
                                    <input type="password" className="form-control shadow-none" placeholder="Enter password" />
                                </div>

                                <div className="form-group mb-4">
                                    <button type="submit" className="btn btn-danger btn-block text-white shadow-none">Login</button>
                                </div>
                            </form>
                            <div className="links text-center">
                                <p onClick={this.showLogin}>Already have an account ?</p>
                            </div>
                        </div>
                    }

                    {this.state.forgot &&
                        <div className="forgot px-2">
                            <p>Just enter your e-mail, we will send a new password.</p>
                            <form>
                                <div className="form-group mb-3">
                                    <small>Your email address</small>
                                    <input type="text" className="form-control shadow-none" placeholder="Enter e-mail" />
                                </div>

                                <div className="form-group mb-4">
                                    <button type="submit" className="btn btn-danger btn-block text-white shadow-none">Reset Password</button>
                                </div>
                            </form>
                            <div className="links text-center">
                                <p onClick={this.showLogin}>Go to login</p>
                            </div>
                        </div>
                    }


                </Rodal>

            </div>
        );
    }
}

export default Nav;