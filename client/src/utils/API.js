import axios from "axios";

export default {

  // gets all users from the database
  getUsers: function() {
    return axios.get("/api/users");
  },
  // gets a specific user from the database
  getUser: function(id) {
    return axios.get(`/api/users/${id}`);
  },
    // Saves a user to the database
  signUp: function(userData) {
    return axios.post("/api/signup/", userData);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  editUser: function(id, editData) {
    return axios.put(`/api/users/${id}`, editData);
  },
  deleteUser: function(id) {
    return axios.delete(`/api/users/${id}`);
  },
  // Logs a user in
  logIn: function(loginData) {
    return axios.post("/api/login/", loginData);
  },
  // Logs a user out
  logOut: function(id) {
    return axios.get("/api/logout/", id);
  },
  // gets all powerPoints from the database
  getPowerPoints: function() {
    return axios.get("/api/powerPoints");
  },
  // gets a specific powerPoint from the database
  getPowerPoint: function(id) {
    return axios.get(`/api/powerPoints/${id}`);
  },
  savePowerPoint: function(powerPointData) {
    return axios.post("/api/powerPoints", powerPointData);
  },
  editPowerPoint: function(id) {
    return axios.put("/api/powerPoints/" + id);
  },
  deletePowerPoint: function(id) {
    return axios.delete(`/api/powerPoints/${id}`);
  },

}