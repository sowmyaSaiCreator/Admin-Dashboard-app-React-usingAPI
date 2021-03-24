import React, { useState, useContext } from "react";
import userContext from "./usercontext";
function EditUser(props) {

    let uniqueId;
    uniqueId = props.match.params.id;
    let users = useContext(userContext);
    let currentUser = users.userList[`${uniqueId}`];
    let [name, setName] = useState(currentUser.name);
    let [position, setPosition] = useState(currentUser.position);
    let [office, setOffice] = useState(currentUser.office);
    let [salary, setSalary] = useState(currentUser.salary);

    function editUser(e) {
        e.preventDefault();
        let obj = {
            uniqueId, name, position, office, salary
        }
        users.userList[uniqueId] = obj;
        users.setUserList([...users.userList]);
        setName("");
        setPosition("");
        setOffice("");
        setSalary("");
    }
    return (
        <div class="container">
            <h1>Edit User</h1>
            <form>
                <div class="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" class="form-control" id="name" name="name" value={name} onChange={(e) => {
                        setName(e.target.value);
                    }} />
                </div>
                <div class="form-group">
                    <label htmlFor="pos">Position</label>
                    <input type="text" class="form-control" id="pos" name="pos" value={position} onChange={(e) => {
                        setPosition(e.target.value);
                    }} />
                </div>
                <div class="form-group">
                    <label htmlFor="office">Office</label>
                    <input type="text" class="form-control" id="office" name="office" value={office} onChange={(e) => {
                        setOffice(e.target.value);
                    }} />
                </div>
                <div class="form-group">
                    <label htmlFor="salary">Salary</label>
                    <input type="text" class="form-control" id="salary" name="salary" value={salary} onChange={(e) => {
                        setSalary(e.target.value);
                    }} />
                </div>
                <button type="submit" class="btn btn-success" onClick={(e) => editUser(e)}>Submit</button>
            </form>
        </div>
    );
}
export default EditUser;