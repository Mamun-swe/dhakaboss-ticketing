import React, { Component } from 'react';
import "./index.css";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        }
    }
    render() {
        const { allUsers } = this.state
        return (
            <div className="users">
                <div className="options-menu px-3 py-2">
                    <div className="d-flex justify-content-end">
                        <div>
                            <button type="button" className="btn btn-light btn-sm shadow-none text-info mr-2">Mail</button>
                        </div>
                        <div>
                            <button type="button" className="btn btn-light btn-sm shadow-none text-primary">Message</button>
                        </div>
                    </div>
                </div>
                <div className="break"></div>


                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-sm table-responsive-md table-bordered">
                                <thead>
                                    <tr>
                                        <td className="text-center"><p className="mb-0">SL</p></td>
                                        <td><p className="mb-0">First Name</p></td>
                                        <td><p className="mb-0">Last Name</p></td>
                                        <td><p className="mb-0">Phone</p></td>
                                        <td><p className="mb-0">E-mail</p></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allUsers.length ?
                                            allUsers.map(user =>
                                                <tr key={user}>
                                                    <td className="text-center"><p className="mb-0">{user}</p></td>
                                                    <td><p className="mb-0 text-capitalize">abdullah al</p></td>
                                                    <td><p className="mb-0 text-capitalize">mamun</p></td>
                                                    <td><p className="mb-0 text-capitalize">+880 1533 5926 10</p></td>
                                                    <td><p className="mb-0">mamun.swe.277@gmail.com</p></td>

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

export default Users;