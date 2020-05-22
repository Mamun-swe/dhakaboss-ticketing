import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import "./master.css";
import $ from 'jquery';

// import Nav from "./nav/index";
import Dashboard from "./dashboard/index";
import Companies from "./companies/index/index";
import ShowCompany from "./companies/show/index";
import EditCompany from "./companies/edit/index";

import BarIcon from "./../../assets/icons/bar.png";
import CloseIcon from "./../../assets/icons/close.png";
import UserIcon from "./../../assets/icons/user-add.png";

class AdminMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        $('.open-btn').hide()
    }

    openSideMenu = () => {
        $('.side-menu').css('left', "0%")
        $('.open-btn').hide()
        $('.close-btn').show()
        $('.main-menu').css('padding-left', '250px')
    }

    closeSideMenu = () => {
        $('.side-menu').css('left', "-100%")
        $('.open-btn').show()
        $('.close-btn').hide()
        $('.main-menu').css('padding-left', '0px')
    }

    render() {
        return (
            <div className="super-admin-master">
                {/* Top Nav */}
                <div className="top-navbar p-3 border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex">
                                    <div>
                                        <button type="button" className="btn bar-btn btn-light rounded-circle shadow-none open-btn" onClick={this.openSideMenu}>
                                            <img src={BarIcon} className="img-fluid" alt="Bars Icon" />
                                        </button>
                                        <button type="button" className="btn bar-btn btn-light rounded-circle shadow-none close-btn" onClick={this.closeSideMenu}>
                                            <img src={CloseIcon} className="img-fluid" alt="Close Icon" />
                                        </button>
                                    </div>
                                    <div className="ml-auto">
                                        <button type="button" className="btn user-btn btn-light rounded-circle shadow-none">
                                            <img src={UserIcon} className="img-fluid" alt="Bars Icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Top Nav */}
                <div className="break"></div>


                {/* Side Menu Bar */}
                <div className="side-menu border-right">
                    <NavLink exact to="/admin/" className="btn shadow-none" activeClassName="is-active">dashboard</NavLink>
                    <NavLink exact to="/admin/companies" className="btn shadow-none" activeClassName="is-active">companies</NavLink>
                </div>


                {/* Main Routing Area */}
                <div className="main-menu">
                    <Switch>
                        <Route exact path="/admin/" component={Dashboard} />
                        <Route exact path="/admin/companies" component={Companies} />
                        <Route exact path="/admin/companies/:id" component={ShowCompany} />
                        <Route exact path="/admin/companies/:id/edit" component={EditCompany} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AdminMaster;