import React, { Component } from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        }
    }
    render() {
        const { companies } = this.state
        return (
            <div className="companies">
                <div className="filter-company">
                    <div className="d-flex justify-content-center">
                        <div>
                            <input type="text" className="form-control form-control-sm shadow-none" placeholder="Search by name ..." />
                        </div>
                        <div className="ml-2">
                            <input type="text" className="form-control form-control-sm shadow-none" placeholder="Search by location ..." />
                        </div>
                    </div>
                </div>
                <div className="break"></div>
                <div className="company-list">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-sm table-responsive-md table-bordered">
                                    <thead>
                                        <tr>
                                            <td className="text-center"><p className="mb-0">SL</p></td>
                                            <td><p className="mb-0">Company Name</p></td>
                                            <td><p className="mb-0">Type</p></td>
                                            <td><p className="mb-0">Location</p></td>
                                            <td className="text-center"><p className="mb-0">Contact</p></td>
                                            <td className="text-center"><p className="mb-0">Transports</p></td>
                                            <td className="text-center"><p className="mb-0">Action</p></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            companies.length ?
                                                companies.map(company =>
                                                    <tr key={company}>
                                                        <td className="text-center"><p className="mb-0">{company}</p></td>
                                                        <td><p className="mb-0 text-capitalize">hanif express</p></td>
                                                        <td><p className="mb-0 text-capitalize">bus</p></td>
                                                        <td><p className="mb-0 text-capitalize">gabtali, dhaka</p></td>
                                                        <td className="text-center"><p className="mb-0">+88 0153 3592 610</p></td>
                                                        <td className="text-center"><p className="mb-0">40</p></td>
                                                        <td className="text-center">
                                                            <Link to={`/admin/companies/${company}`} type="button" className="btn btn-sm shadow-none btn-light text-primary">Show</Link>
                                                            <Link to={`/admin/companies/${company}/edit`} type="button" className="btn btn-sm shadow-none btn-light text-info mx-2">Edit</Link>
                                                            <button type="button" className="btn btn-sm shadow-none btn-light text-danger">Delete</button>
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
                </div>
            </div>
        );
    }
}

export default Companies;