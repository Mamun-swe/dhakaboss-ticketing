import React, { Component } from 'react';
import "./index.css";
import $ from 'jquery';
import CloseIcon from '../../../../assets/icons/close.png';

let scrollYAmount = 0;

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transports: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        }
        window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll = () => {
        scrollYAmount = window.scrollY;
        if (scrollYAmount >= 240) {
            $('.transport-filter-card').addClass("fixed_transport_filter_card")
        } else {
            $('.transport-filter-card').removeClass("fixed_transport_filter_card")
        }
    }

    showTransportInfo = () => {
        $('.transport_info_modal').css('right', '0%')
    }

    hideTransportInfo = () => {
        $('.transport_info_modal').css('right', '-100%')
    }

    render() {
        const { transports } = this.state
        return (
            <div className="company-show py-3">

                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-12">
                            {/* Conpany Info */}
                            <div className="card rounded-0 shadow-sm company-info-card">
                                <div className="card-body">
                                    <h5 className="text-capitalize">company name</h5>
                                    <p className="mb-0">type</p>
                                    <p className="mb-0">transports</p>
                                    <p className="mb-0">phone</p>
                                    <p className="mb-0">location</p>
                                    <button type="button" className="btn py-1 px-4 btn-primary shadow-none text-white float-right">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Transports */}
                    <div className="row">
                        {/* Filter Transport */}
                        <div className="col-12">
                            <div className="card border-0 rounded-0">
                                <div className="card-body p-2 transport-filter-card">
                                    <div className="d-flex justify-content-center">
                                        <div className="mr-2">
                                            <input type="text" className="form-control form-control-sm shadow-none" placeholder="Filter by ID" />
                                        </div>
                                        <div>
                                            <input type="text" className="form-control form-control-sm shadow-none" placeholder="Filter by type" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 transport-list">
                            <table className="table table-sm table-responsive-md table-bordered">
                                <thead>
                                    <tr>
                                        <td className="text-center"><p className="mb-0">SL</p></td>
                                        <td className="text-center"><p className="mb-0">ID</p></td>
                                        <td className="text-center"><p className="mb-0">Type</p></td>
                                        <td className="text-center"><p className="mb-0">Travel Road</p></td>
                                        <td className="text-center"><p className="mb-0">Your Booked Seat</p></td>
                                        <td className="text-center"><p className="mb-0">Avilable Seat</p></td>
                                        <td className="text-center"><p className="mb-0">Seat Price</p></td>
                                        <td className="text-center"><p className="mb-0">Action</p></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        transports.length ?
                                            transports.map(transport =>
                                                <tr key={transport}>
                                                    <td className="text-center"><p className="mb-0">{transport}</p></td>
                                                    <td className="text-center"><p className="mb-0">181-35-277</p></td>
                                                    <td className="text-center"><p className="mb-0">AC</p></td>
                                                    <td className="text-center"><p className="mb-0">dhaka - rajshahi</p></td>
                                                    <td className="text-center"><p className="mb-0">60</p></td>
                                                    <td className="text-center"><p className="mb-0">50</p></td>
                                                    <td className="text-center"><p className="mb-0">TK. 500</p></td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn btn-sm shadow-none btn-light text-info" onClick={this.showTransportInfo}>Details</button>
                                                    </td>
                                                </tr>
                                            ) :
                                            null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Transport Information Modal */}
                <div className="transport_info_modal shadow-sm p-3">
                    <button type="button" className="btn btn-light rounded-circle shadow-none" onClick={this.hideTransportInfo}>
                        <img src={CloseIcon} alt="..." className="img-fluid" />
                    </button>
                    <div className="content pt-3">
                        <table className="table table-sm table-borderless">
                            <tbody>
                                <tr>
                                    <td><h6>transport ID</h6></td>
                                    <td><h6>181-35-277</h6></td>
                                </tr>
                                <tr>
                                    <td><p>type</p></td>
                                    <td><p>AC</p></td>
                                </tr>
                                <tr>
                                    <td><p>your booked seat</p></td>
                                    <td><p>60</p></td>
                                </tr>
                                <tr>
                                    <td><p>avilable seat</p></td>
                                    <td><p>20</p></td>
                                </tr>
                                <tr>
                                    <td><p>seat price</p></td>
                                    <td><p>TK. 500</p></td>
                                </tr>
                                <tr>
                                    <td><p>travel road</p></td>
                                    <td><p>dhaka - rajshahi</p></td>
                                </tr>

                                {/* Travel Schedule */}
                                <tr>
                                    <td><h6>travel schedule</h6></td>
                                </tr>
                                <tr>
                                    <td><p>saturday</p></td>
                                    <td><p>08:00 PM - 12:00 AM</p></td>
                                </tr>
                                <tr>
                                    <td><p>sunday</p></td>
                                    <td><p>08:00 PM - 12:00 AM</p></td>
                                </tr>
                                <tr>
                                    <td><p>monday</p></td>
                                    <td><p>08:00 PM - 12:00 AM</p></td>
                                </tr>
                                <tr>
                                    <td><p>thuesday</p></td>
                                    <td><p>08:00 PM - 12:00 AM</p></td>
                                </tr>
                                <tr>
                                    <td><p>thusday</p></td>
                                    <td><p>08:00 PM - 12:00 AM</p></td>
                                </tr>
                                <tr>
                                    <td><p>wednesday</p></td>
                                    <td><p>08:00 PM - 12:00 AM</p></td>
                                </tr>
                                <tr>
                                    <td><p>friday</p></td>
                                    <td><p>08:00 PM - 12:00 AM</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* End Transport Information Modal */}

            </div>
        );
    }
}

export default Show;