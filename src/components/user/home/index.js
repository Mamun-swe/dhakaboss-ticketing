import React, { Component } from 'react';
import './index.css';
import UserNav from '../nav/index';
import Footer from '../footer/index';
import { Link } from 'react-router-dom';
// import $ from 'jquery';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import BannerImg from '../../../assets/static/banner.jpg';


import packageImg from '../../../assets/packages/eiffel.png';
import ArrowIcon from '../../../assets/icons/arrow.png';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
        }
    }

    startDateHandeler(date, dateString) {
        console.log(date, dateString);
    }

    returnDateHandeler(date, dateString) {
        console.log(date, dateString);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/transports');
    }

    render() {
        const { packages } = this.state;
        return (
            <div className="home">
                <UserNav />


                {/* Header Search Form */}
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4 img-column text-center text-lg-left">
                                <img src={BannerImg} className="img-fluid mb-lg-5 d-none d-lg-block" alt="Banner" />
                                <h1>book your online ticket</h1>
                            </div>
                            <div className="col-12 col-lg-8 search-column px-lg-0">
                                <div className="card border-0">
                                    {/* Form */}
                                    <form onSubmit={this.handleSubmit}>
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

                {/* Travel Packages */}
                <div className="travel-packages">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-right mb-4">
                                <h1>Choose a package</h1>
                            </div>
                        </div>

                        {/* Packages */}

                        <div className="packages mb-4 mb-md-5">
                            <div className="row">

                                {
                                    packages.length ?
                                        packages.map(post =>
                                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 package-column" key={post}>
                                                <Link to="/">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="img-box text-center mb-2">
                                                                <img src={packageImg} className="img-fluid" alt="Tour Package" />
                                                            </div>
                                                            <div className="content">
                                                                <ul>
                                                                    <li><h5 className="mb-0 text-capitalize">dhaka</h5></li>
                                                                    <li className="mx-2"><img src={ArrowIcon} className="img-fluid arrow-icon" alt="Arrow Icon" /></li>
                                                                    <li><h5 className="mb-0 text-capitalize">paris</h5></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ) :
                                        null
                                }

                            </div>
                        </div>

                        {/* End Packages */}
                    </div>
                </div>
                {/* End Travel Packages */}

                <Footer />
            </div>
        );
    }
}

export default Home;