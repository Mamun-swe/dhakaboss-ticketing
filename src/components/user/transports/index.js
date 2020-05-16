import React, { Component } from 'react';
import './index.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import $ from 'jquery';

import UserNav from '../nav/index';
import Footer from '../footer/index';

import DownArrowIcon from '../../../assets/icons/right.png';

class Transports extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        $('.toggle-transport-items').hide()
        $('.toggle-bags-items').hide()
    }

    handleTransport = () => {
        $('.toggle-transport-items').toggle(200)
        $('.toggle-transport-img').toggleClass('down')
    }
    handleBags() {
        $('.toggle-bags-items').toggle(200)
        $('.toggle-bags-img').toggleClass('down')
    }

    render() {
        return (
            <div>
                <UserNav />
                <div className="transports">
                    {/* Header Search Form */}
                    <div className="header pt-4 pt-lg-5 pb-2 pb-lg-4">
                        <div className="container">
                            <div className="row">

                                <div className="col-12 search-column px-lg-0">
                                    <div className="card border-0">
                                        {/* Form */}
                                        <form>
                                            <div className="form-row">
                                                {/* From journy */}
                                                <div className="form-group col-md-3">
                                                    <input type="text" className="form-control shadow-none start-destination-control" placeholder="From" />
                                                    <i className="far fa-circle"></i>
                                                </div>

                                                {/* To journey */}
                                                <div className="form-group col-md-3">
                                                    <input type="text" className="form-control shadow-none end-destination-control" placeholder="To" />
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>

                                                {/* Start Date */}
                                                <div className="form-group col-md-2">
                                                    <DatePicker className="form-control shadow-none start-date-control" placeholder="Start Date" onChange={this.startDateHandeler} />
                                                    <i className="fas fa-calendar-check"></i>
                                                </div>

                                                {/* Return Date */}
                                                <div className="form-group col-md-2">
                                                    <DatePicker className="form-control shadow-none start-date-control" placeholder="Add return" onChange={this.returnDateHandeler} />
                                                    <i className="fas fa-calendar-check"></i>
                                                </div>

                                                <div className="form-group col-md-2">
                                                    <button type="submit" className="btn btn-block shadow-none">Search</button>
                                                </div>
                                            </div>

                                        </form>
                                        {/* End Form */}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Header Search Form */}


                    {/* Main Section */}
                    <div className="main-section mb-4">
                        <div className="container">
                            <div className="row">


                                {/* Filter Column */}
                                <div className="col-12 col-lg-3 filter-column pl-lg-0 pr-lg-2">
                                    <div className="card">
                                        <div className="card-header border-0 py-3">
                                            <h6 className="mb-0 text-white">Filter</h6>
                                        </div>
                                        <div className="card-body">

                                            {/* Transport Toggle */}
                                            <div className="toggle-menu">
                                                <div className="toggle-title" onClick={this.handleTransport}>
                                                    <div className="d-flex">
                                                        <div><p className="mb-0">Transport</p></div>
                                                        <div className="ml-auto">
                                                            <img className="toggle-transport-img" src={DownArrowIcon} alt="Rigth arrow" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggle-transport-items">
                                                    <div className="form-check pl-4 pb-2">
                                                        <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                                            Buses
                                                        </label>
                                                    </div>
                                                    <div className="form-check pl-4 pb-2">
                                                        <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                                            Train
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Transport Toggle */}

                                            {/* Bags Toggle */}
                                            <div className="toggle-menu">
                                                <div className="toggle-title" onClick={this.handleBags}>
                                                    <div className="d-flex">
                                                        <div><p className="mb-0">Bags</p></div>
                                                        <div className="ml-auto">
                                                            <img src={DownArrowIcon} className="toggle-bags-img" alt="Rigth arrow" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggle-bags-items">
                                                    <div className="d-flex pt-2">
                                                        <div className="p-2 flex-fill">
                                                            <p className="mb-0"><i className="fas fa-suitcase-rolling mr-2"></i>Cabin bags</p>
                                                        </div>
                                                        <div className="px-1 py-2">
                                                            <button type="button" className="btn border shadow-none btn-sm btn-light text-dark"><i className="fas fa-minus"></i></button>
                                                        </div>
                                                        <div className="px-1 py-2">
                                                            <input type="text" className="form-control form-control-sm shadow-none text-center" readOnly value="0" />
                                                        </div>
                                                        <div className="px-1 py-2">
                                                            <button type="button" className="btn border shadow-none btn-sm btn-light text-dark"><i className="fas fa-plus"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="p-2 flex-fill">
                                                            <p className="mb-0"><i className="fas fa-briefcase mr-2"></i>Checked bags</p>
                                                        </div>
                                                        <div className="px-1 py-2">
                                                            <button type="button" className="btn border shadow-none btn-sm btn-light text-dark"><i className="fas fa-minus"></i></button>
                                                        </div>
                                                        <div className="px-1 py-2">
                                                            <input type="text" className="form-control form-control-sm shadow-none text-center" readOnly value="0" />
                                                        </div>
                                                        <div className="px-1 py-2">
                                                            <button type="button" className="btn border shadow-none btn-sm btn-light text-dark"><i className="fas fa-plus"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Bags Toggle */}



                                        </div>
                                    </div>
                                </div>
                                {/* End Filter Column */}




                            </div>
                        </div>
                    </div>
                    {/* End Main Section */}


                </div>
                <Footer />
            </div>
        );
    }
}

export default Transports;
