import React, { useContext, useState } from "react";
import userContext from "./usercontext";

function CreateUser() {
    let users = useContext(userContext);
    let [name, setName] = useState("");
    let [position, setPosition] = useState("");
    let [office, setOffice] = useState("");
    let [salary, setSalary] = useState("");

    function addUser(e) {
        e.preventDefault();
        let uniqueId;
        (users.userList.length > 0) ? uniqueId = parseInt(users.userList[users.userList.length - 1].uniqueId) + 1 : uniqueId = 0;
        let obj = {
            uniqueId, name, position, office, salary
        }
        users.setUserList([...users.userList, obj]);
        setName("");
        setPosition("");
        setOffice("");
        setSalary("");
    }
    return (
        <div class="container">
            <h1>Create User</h1>
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
                <button type="submit" class="btn btn-success" onClick={(e)=>addUser(e)}>Submit</button>
            </form>
        </div>


    );
}
export default CreateUser;