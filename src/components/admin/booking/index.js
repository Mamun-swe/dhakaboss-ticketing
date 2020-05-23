import React, { Component } from 'react';
import "./index.css";

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tranports: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        }
    }
    render() {
        const { tranports } = this.state
        return (
            <div className="admin_booking">
                {/* Filter Box */}
                <div className="filter-box">
                    <div className="d-lg-flex justify-content-center px-3 px-lg-0">
                        <div>
                            <input type="text" className="form-control form-control-sm shadow-none" placeholder="Company Name ..." />
                        </div>
                        <div>
                            <input type="text" className="form-control form-control-sm shadow-none" placeholder="From ..." />
                        </div>
                        <div>
                            <input type="text" className="form-control form-control-sm shadow-none" placeholder="To ..." />
                        </div>
                        <div>
                            <select className="form-control form-control-sm shadow-none">
                                <option defaultValue value="">Transport Type</option>
                                <option value="ac">AC</option>
                                <option value="non-ac">Non-AC</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" className="form-control form-control-sm shadow-none" placeholder="Max Price" />
                        </div>
                    </div>
                </div>
                <div className="break"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 pb-3">
                            <table className="table table-sm table-responsive-lg table-bordered">
                                <thead>
                                    <tr>
                                        <td className="text-center"><p>SL</p></td>
                                        <td className="text-center"><p>Transport ID</p></td>
                                        <td><p>Company Name</p></td>
                                        <td className="text-center"><p>Transport Type</p></td>
                                        <td><p>Travel Road</p></td>
                                        <td className="text-center"><p>Travel Time</p></td>
                                        <td className="text-center"><p>Seat Price</p></td>
                                        <td className="text-center"><p>Available Seats</p></td>
                                        <td className="text-center"><p>Action</p></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tranports.length ?
                                            tranports.map(tranport =>
                                                <tr key={tranport}>
                                                    <td className="text-center"><p>{tranport}</p></td>
                                                    <td className="text-center"><p>181-35-277</p></td>
                                                    <td><p>hanif express</p></td>
                                                    <td className="text-center"><p>AC</p></td>
                                                    <td><p>dhaka - rajshahi</p></td>
                                                    <td className="text-center"><p>08:00 PM - 12:00 AM</p></td>
                                                    <td className="text-center"><p>TK. 500</p></td>
                                                    <td className="text-center"><p>5</p></td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn btn-light btn-sm shadow-none text-success">Book</button>
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
        );
    }
}

export default Booking;