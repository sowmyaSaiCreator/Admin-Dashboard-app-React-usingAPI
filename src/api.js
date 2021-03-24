import axios from "axios";

export function getUserData() {
    return axios.get("https://605adba427f0050017c0556b.mockapi.io/adminDashboard/users");

}

export function postUserData(data) {
    return axios.post(`https://605adba427f0050017c0556b.mockapi.io/adminDashboard/users`,data);

}

export function getCurrentUserData(id) {
    return axios.get(`https://605adba427f0050017c0556b.mockapi.io/adminDashboard/users/${id}`);

}

export function updateCurrentUserData(id,data) {
    return axios.put(`https://605adba427f0050017c0556b.mockapi.io/adminDashboard/users/${id}`,data);

}

export function deleteCurrentUser(id) {
    return axios.delete(`https://605adba427f0050017c0556b.mockapi.io/adminDashboard/users/${id}`);

}
