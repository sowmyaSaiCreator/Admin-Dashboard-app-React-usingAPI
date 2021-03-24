import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import userContext from "./usercontext";
function Users() {
    let users = useContext(userContext);
    console.log(users.userList);
    return (
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <Link className="text-success float-right" to="/createuser">
                    <i className="fas fa-fw fa-user-plus"></i>
                    <span class="pad-5"> Create User</span>
                </Link>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.userList.map((item, index) => {
                                    console.log(item);
                                   return  <tr>
                                        <td>{item.name} </td>
                                        <td>{item.position}</td>
                                        <td>{item.office}</td>
                                        <td>{item.salary}</td>

                                        <td>
                                            <Link className="text-danger" to={`/edituser/${item.uniqueId}`}>
                                                <div><i className="fas fa-fw fa-user-edit"></i>
                                                    <span className="pad-5">Edit User</span>
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
export default Users;