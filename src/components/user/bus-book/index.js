import React, { Component } from 'react';
import './index.css';

import StearingIcon from '../../../assets/icons/stearing.png';
import TransportLogo from '../../../assets/transports_logo/biman.png';


import UserNav from '../nav/index';
import Footer from '../footer/index';
import { Link } from 'react-router-dom';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleBooking = () => {
        this.props.history.push('/checkout');
    }


    render() {
        return (
            <div className="book">
                <UserNav />

                <div className="container py-3 py-lg-5">
                    <div className="row">

                        {/* Bus Seat */}
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <h6 className="text-center mb-4">Choose your seat</h6>
                            {/* Color Direction */}
                            <div className="color-direction pb-2">
                                <div className="d-flex mb-2">
                                    <div><div className="red-box"></div></div>
                                    <div className="pl-2"><p className="mb-0">Already Booked</p></div>
                                </div>
                                <div className="d-flex mb-2">
                                    <div><div className="primary-box"></div></div>
                                    <div className="pl-2"><p className="mb-0">Your Booked</p></div>
                                </div>
                                <div className="d-flex mb-2">
                                    <div><div className="transparent-box"></div></div>
                                    <div className="pl-2"><p className="mb-0">Available Seats</p></div>
                                </div>
                            </div>
                            {/* End Color Direction */}

                            {/* All Seats */}
                            <div className="bus-seats">
                                {/* Head */}
                                <div className="head pt-2">
                                    <div className="d-flex">
                                        <div className="pt-3">
                                            <button type="button" className="btn gateBtn shadow-none">gate</button>
                                        </div>
                                        <div className="ml-auto pr-2 text-center">
                                            <img src={StearingIcon} alt="Stearing Icon" />
                                            <br />
                                            <button type="button" className="btn btn-sm shadow-none mt-1">driver</button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Head */}

                                {/* Body */}
                                <div className="body mt-1">
                                    <div className="lines seat-line">
                                        <button type="button" className="btn shadow-none">vip</button>
                                        <button type="button" className="btn shadow-none">vip</button>
                                        <button type="button" className="btn shadow-none">a-1</button>
                                        <button type="button" className="btn shadow-none booked" disabled={true}>a-2</button>
                                        <button type="button" className="btn shadow-none">b-1</button>
                                        <button type="button" className="btn shadow-none">b-2</button>
                                        <button type="button" className="btn shadow-none my-booked" disabled={true}>c-1</button>
                                        <button type="button" className="btn shadow-none">c-2</button>
                                        <button type="button" className="btn shadow-none">d-1</button>
                                        <button type="button" className="btn shadow-none">d-2</button>
                                        <button type="button" className="btn shadow-none">e-1</button>
                                        <button type="button" className="btn shadow-none">e-2</button>
                                        <button type="button" className="btn shadow-none">f-1</button>
                                        <button type="button" className="btn shadow-none">f-2</button>
                                        <button type="button" className="btn shadow-none">g-1</button>
                                        <button type="button" className="btn shadow-none">g-2</button>
                                        <button type="button" className="btn shadow-none">h-1</button>
                                        <button type="button" className="btn shadow-none">h-2</button>
                                        <button type="button" className="btn shadow-none">i-1</button>
                                        <button type="button" className="btn shadow-none">i-2</button>
                                    </div>
                                    <div className="lines center-street"></div>
                                    <div className="lines seat-line">
                                        <button type="button" className="btn shadow-none">vip</button>
                                        <button type="button" className="btn shadow-none">vip</button>
                                        <button type="button" className="btn shadow-none">a-3</button>
                                        <button type="button" className="btn shadow-none">a-4</button>
                                        <button type="button" className="btn shadow-none">b-3</button>
                                        <button type="button" className="btn shadow-none">b-4</button>
                                        <button type="button" className="btn shadow-none">c-3</button>
                                        <button type="button" className="btn shadow-none">c-4</button>
                                        <button type="button" className="btn shadow-none">d-3</button>
                                        <button type="button" className="btn shadow-none">d-4</button>
                                        <button type="button" className="btn shadow-none">e-3</button>
                                        <button type="button" className="btn shadow-none">e-4</button>
                                        <button type="button" className="btn shadow-none">f-3</button>
                                        <button type="button" className="btn shadow-none">f-4</button>
                                        <button type="button" className="btn shadow-none">g-3</button>
                                        <button type="button" className="btn shadow-none">g-4</button>
                                        <button type="button" className="btn shadow-none">h-3</button>
                                        <button type="button" className="btn shadow-none">h-4</button>
                                        <button type="button" className="btn shadow-none">i-3</button>
                                        <button type="button" className="btn shadow-none">i-4</button>
                                    </div>
                                </div>
                                {/* End Body */}

                                {/* Footer */}
                                <div className="footer text-center mb-2">
                                    <button type="button" className="btn shadow-none">j-1</button>
                                    <button type="button" className="btn shadow-none">j-2</button>
                                    <button type="button" className="btn shadow-none">j-3</button>
                                    <button type="button" className="btn shadow-none">j-5</button>
                                    <button type="button" className="btn shadow-none">j-5</button>
                                </div>
                                {/* End Footer */}

                            </div>
                            {/* End All Seats */}


                        </div>
                        {/* End Bus Seat */}

                        <div className="col-12 col-lg-6 audit-column pl-lg-5">
                            <div className="header py-2 mb-3">
                                <div className="d-flex">
                                    <div><img src={TransportLogo} alt="Company Logo" /></div>
                                    <div className="pl-2 pl-lg-4">
                                        <h5 className="text-uppercase">hanif express</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="content-body">

                                {/* Departing Info */}
                                <div className="departing-info mb-3">
                                    <h6 className="text-uppercase mb-1">departing-info</h6>
                                    <div className="boder mb-3"></div>

                                    {/* Departure date */}
                                    <div className="date mb-2">
                                        <p className="text-capitalize title mb-0">departure date</p>
                                        <p className="content text-capitalize text-muted mb-0">13 june 2020, saturday 8:00 PM</p>
                                    </div>

                                    {/* Departure From */}
                                    <div className="from mb-2">
                                        <p className="text-capitalize title mb-0">departure from</p>
                                        <p className="content text-capitalize text-muted mb-0">gabtali bus terminal dhaka</p>
                                    </div>

                                    {/* Arrive */}
                                    <div className="arrive mb-2">
                                        <p className="text-capitalize title mb-0">Arrive at</p>
                                        <p className="content text-capitalize text-muted mb-0">gabtali bus terminal dhaka</p>
                                    </div>

                                    {/* Transport */}
                                    <div className="transport mb-2">
                                        <p className="text-capitalize title mb-0">bus</p>
                                        <p className="content text-capitalize text-muted mb-0">hanif express</p>
                                    </div>

                                    {/* Seat */}
                                    <div className="seats mb-2">
                                        <p className="text-capitalize title mb-0">seat numbers</p>
                                        <p className="content text-uppercase text-muted mb-0"><b>b-2</b></p>
                                        <p className="content text-uppercase text-muted mb-0"><b>b-2</b></p>
                                    </div>

                                    {/* Unit Price */}
                                    <div className="price mb-2">
                                        <p className="text-capitalize title mb-0">ticket unit price</p>
                                        <p className="content text-capitalize text-muted mb-0">adult: TK. 200</p>
                                        <p className="content text-capitalize text-muted mb-0">child: TK. 100</p>
                                        <p className="content text-capitalize text-muted mb-0">skyway ticket: TK. 2000</p>
                                    </div>
                                </div>

                                {/* Payment Info */}
                                <div className="payment-info mb-2">
                                    <h6 className="text-uppercase mb-1">payment info</h6>
                                    <div className="boder mb-3"></div>
                                    <table className="table table-borderless table-sm">
                                        <thead>
                                            <tr>
                                                <td><p className="mb-0">depart journey fare</p></td>
                                                <td><p className="mb-0"><b>900</b></p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="mb-0">return journey fare</p></td>
                                                <td><p className="mb-0"><b>0.00</b></p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="mb-0">admin fee</p></td>
                                                <td><p className="mb-0"><b>0.00</b></p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="mb-0">discount</p></td>
                                                <td><p className="mb-0"><b>0.00</b></p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="mb-0">tax</p></td>
                                                <td><p className="mb-0"><b>0.00</b></p></td>
                                            </tr>
                                            <tr>
                                                <td><h6 className="mb-0">total</h6></td>
                                                <td><h6 className="mb-0">TK 900</h6></td>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                {/* Confirmation Buttons */}
                                <div className="confirmation mb-4">
                                    <Link to="/" className="btn shadow-none back-btn">Cancle</Link>
                                    <button type="button" className="btn shadow-none text-white continue-btn" onClick={this.handleBooking}>Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Book;