import React, { Component } from 'react';
import './index.css';
import BannerImg from '../../../assets/static/banner.jpg';
import { Link } from 'react-router-dom';

import packageImg from '../../../assets/packages/eiffel.png';
import ArrowIcon from '../../../assets/icons/arrow.png';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
        }
    }

    render() {
        const { packages } = this.state;
        return (

            <div className="home">
                {/* Header */}
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
                                    <form>
                                        <div className="form-row">
                                            {/* From journy */}
                                            <div className="form-group col-md-3">
                                                <input type="text" className="form-control shadow-none" placeholder="From" />
                                                <i className="far fa-circle"></i>
                                            </div>

                                            {/* To journey */}
                                            <div className="form-group col-md-3">
                                                <input type="text" className="form-control shadow-none" placeholder="To" />
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>

                                            {/* Start Date */}
                                            <div className="form-group col-md-2">
                                                <input type="text" className="form-control shadow-none" placeholder="Start Date" />
                                                <i className="fas fa-calendar-check"></i>
                                            </div>

                                            {/* Return Date */}
                                            <div className="form-group col-md-2">
                                                <input type="text" className="form-control shadow-none" placeholder="Add Return" />
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
                {/* End Header */}

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
                                                <Link to="">
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
            </div>
        );
    }
}

export default Home;