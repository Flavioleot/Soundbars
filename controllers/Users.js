const ModelUser = require("../models/User.js");

class ControllerUsers {
  #users = [];

  create(username, password, email) {
    const user = new ModelUser(username, password, email);
    this.#users.push(user);
    return { id: user.id, username: user.username, email: user.email };
  }
  read(username, password) {
    const userFound = this.#users.find(function (user) {
      if (user.username === username && user.password === password) return true;
      return false;
    });
    return userFound;
  }

  update(id, username, password, email) {}
  delete(id) {}
  get(username, password) {
    const userFound = this.users.find(function (user) {
      if (user.username === username && user.password === password) return true;
      return false;
    });
    return userFound;
  }

  getUsers() {
    return this.#users;
  }
}

module.exports = ControllerUsers;
