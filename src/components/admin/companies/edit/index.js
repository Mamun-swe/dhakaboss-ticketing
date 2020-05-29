import React, { Component } from 'react';
import "./index.css";

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: "Hanif Express",
            companyType: "Bus",
            companyLocation: "Gabtali, Dhaka",
            companyContact: "01533592610"
        }
    }

    nameHandaller = (event) => {
        this.setState({ companyName: event.target.value })
    }

    typeHandeller = (event) => {
        this.setState({ companyType: event.target.value })
    }

    locationHandaller = (event) => {
        this.setState({ companyLocation: event.target.value })
    }

    contactHandaller = (event) => {
        this.setState({ companyContact: event.target.value })
    }

    formSubmit = (event) => {
        event.preventDefault();
        const company = {
            company_name: this.state.companyName,
            company_type: this.state.companyType,
            company_location: this.state.companyLocation,
            company_contact: this.state.companyContact
        }
        console.log(company)
    }

    render() {
        return (
            <div className="edit_company py-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card border-0 rounded-0">
                                <div className="card-header border-0 bg-white px-0 px-sm-3 pb-0">
                                    <h5 className="mb-0 text-capitalize">{this.state.companyName}</h5>
                                </div>
                                <div className="card-body py-4 px-0 px-sm-3">
                                    <form onSubmit={this.formSubmit}>
                                        {/* Name */}
                                        <div className="form-group mb-3">
                                            <label>Company Name</label>
                                            <input type="text" className="form-control rounded-0 shadow-none" onChange={this.nameHandaller} value={this.state.companyName} />
                                        </div>

                                        {/* Type */}
                                        <div className="form-group mb-3">
                                            <label>Company Type</label>
                                            <select className="form-control rounded-0 shadow-none" onChange={this.typeHandeller}>
                                                <option defaultValue value="">Select Company Type</option>
                                                <option value="bus">Bus</option>
                                                <option value="train">Train</option>
                                                <option value="feri">Feri</option>
                                                <option value="flight">Flight</option>
                                            </select>
                                        </div>

                                        {/* Location */}
                                        <div className="form-group mb-3">
                                            <label>Company Location</label>
                                            <input type="text" className="form-control rounded-0 shadow-none" onChange={this.locationHandaller} value={this.state.companyLocation} />
                                        </div>

                                        {/* Contact */}
                                        <div className="form-group mb-3">
                                            <label>Company Contact</label>
                                            <input type="number" min="1" className="form-control rounded-0 shadow-none" onChange={this.contactHandaller} value={this.state.companyContact} />
                                        </div>

                                        <button type="submit" className="btn btn-info rounded-0 shadow-none text-white btn-block">Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;