import React, { Component } from 'react';
import './index.css';
import $ from 'jquery';

import UserNav from '../nav/index';
import Footer from '../footer/index';

import walletImg from '../../../assets/static/wallet.jpg';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketController: true,
            passengerInfo: false,
            paymentInfo: false
        }
    }

    componentDidMount() {
        if (this.state.ticketController) {
            $('#ticketController').addClass('success')
        }
        if (this.state.passengerInfo) {
            $('#passengerInfo').addClass('success')
        }
        if (this.state.paymentInfo) {
            $('#paymentInfo').addClass('success')
        }
    }

    render() {
        return (
            <div className="checkout">
                <UserNav />

                <div className="container py-4">
                    <div className="row">
                        <div className="col-12 progress-flow px-lg-0 mb-5">
                            <div className="card border-0">
                                <div className="card-body">
                                    <div className="d-md-flex justify-content-center">
                                        <div><p className="text-muted pr-2 pr-lg-3" id="ticketController"><i className="far fa-circle mr-2"></i><span>Ticket Controller Info .....</span></p></div>
                                        <div><p className="text-muted pr-2 pr-lg-3" id="passengerInfo"><i className="far fa-circle mr-2"></i><span>Passenger Info .....</span></p></div>
                                        <div><p className="text-muted pr-2 pr-lg-3" id="paymentInfo"><i className="far fa-circle mr-2"></i><span>Payment</span></p></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 m-auto">
                            <div className="text-center title mb-4">
                                <h5 className="mb-0 text-capitalize">enter ticket collector details & make payment</h5>
                            </div>

                            {/* Payment Form */}
                            <form method="post">
                                <h5 className="mb-3 text-info">Ticket Collector Info</h5>

                                {/* Email */}
                                <div className="form-group mb-4">
                                    <label>Email</label>
                                    <input type="text" className="form-control shadow-none" placeholder="example@gmail.com" />
                                </div>

                                {/* Re Email */}
                                <div className="form-group mb-4">
                                    <label>Retype Email</label>
                                    <input type="text" className="form-control shadow-none" placeholder="Retype Your Email" />
                                </div>

                                {/* Contact */}
                                <div className="form-group mb-5">
                                    <div className="d-flex">
                                        <div><label>Contact Number</label></div>
                                        <div className="ml-auto">
                                            <small className="text-info">For emergency call</small>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group-prepend p-0">
                                            <select className="form-control shadow-none">
                                                <option defaultValue value="bd">bangladesh +88</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <input type="number" min="0" className="form-control shadow-none" placeholder="01xxxxxxxxx" />
                                    </div>
                                </div>

                                {/* Name & NID & Passport & Phone */}
                                <div className="row mb-5">
                                    {/* Name */}
                                    <div className="col-12 col-lg-6 pr-lg-2">
                                        <div className="form-group mb-4">
                                            <label>Full Name</label>
                                            <input type="text" className="form-control shadow-none" placeholder="Enter Your Full Name" />
                                        </div>
                                    </div>


                                    <div className="col-12 col-lg-6 pl-lg-2">
                                        <div className="form-group mb-4">
                                            <div className="d-flex">
                                                <div>
                                                    {/* NID */}
                                                    <div className="custom-control custom-checkbox mr-2">
                                                        <input type="checkbox" className="custom-control-input" id="nid" />
                                                        <label className="custom-control-label" htmlFor="nid">NID</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    {/* Passport */}
                                                    <div className="custom-control custom-checkbox mr-2">
                                                        <input type="checkbox" className="custom-control-input" id="passport" />
                                                        <label className="custom-control-label" htmlFor="passport">Passport</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    {/* Phone */}
                                                    <div className="custom-control custom-checkbox mr-2">
                                                        <input type="checkbox" className="custom-control-input" id="phone" />
                                                        <label className="custom-control-label" htmlFor="phone">Phone</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control shadow-none" placeholder="Enter Your NID Number" />
                                        </div>
                                    </div>
                                </div>


                                {/* Payment Method */}
                                <div className="card payment-method-card">
                                    <div className="card-header p-3">
                                        <div className="d-flex">
                                            <div><h5 className="mb-0 text-muted">Payment</h5></div>
                                            <div className="ml-auto"><h5 className="mb-0 text-info">Total Tk. 900</h5></div>
                                        </div>
                                    </div>
                                    <div className="card-body">

                                        <table className="table table-borderless">
                                            <tbody>
                                                {/* Boss Wallet */}
                                                <tr>
                                                    <td>
                                                        <div className="custom-control custom-checkbox mr-2">
                                                            <input type="checkbox" className="custom-control-input" id="wallet" />
                                                            <label className="custom-control-label" htmlFor="wallet">Boss Wallet</label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img src={walletImg} alt="..." />
                                                    </td>
                                                </tr>

                                                {/* Credit Card */}
                                                <tr>
                                                    <td>
                                                        <div className="custom-control custom-checkbox mr-2">
                                                            <input type="checkbox" className="custom-control-input" id="credit" />
                                                            <label className="custom-control-label" htmlFor="credit">Credit Card</label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img src={walletImg} alt="..." />
                                                    </td>
                                                </tr>

                                                {/* Paypal */}
                                                <tr>
                                                    <td>
                                                        <div className="custom-control custom-checkbox mr-2">
                                                            <input type="checkbox" className="custom-control-input" id="paypal" />
                                                            <label className="custom-control-label" htmlFor="paypal">payPal</label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img src={walletImg} alt="..." />
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>

                                    </div>
                                </div>




                            </form>
                            {/* End Payment Form */}
                        </div>

                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Checkout;
