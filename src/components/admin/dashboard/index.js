import React, { Component } from 'react';
import "./index.css";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="dashboard py-3">
                <div className="container-fluid">
                    <div className="row">

                        {/* Admin */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="flex-center flex-column">
                                        <h4 className="mb-1">12</h4>
                                        <h6 className="mb-0">Admin</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Company */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="flex-center flex-column">
                                        <h4 className="mb-1">12</h4>
                                        <h6 className="mb-0">Company</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bus */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="flex-center flex-column">
                                        <h4 className="mb-1">12</h4>
                                        <h6 className="mb-0">Bus</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* User */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="flex-center flex-column">
                                        <h4 className="mb-1">12</h4>
                                        <h6 className="mb-0">User</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Today's Sale */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="flex-center flex-column">
                                        <h4 className="mb-1">12</h4>
                                        <h6 className="mb-0">Today's Sale</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* This Month Sale */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="flex-center flex-column">
                                        <h4 className="mb-1">12</h4>
                                        <h6 className="mb-0">This Month Sale</h6>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;