const ControllerUsers = require("./controllers/Users.js");
const ControllerArtists = require("./controllers/Artists.js");
const ControllerPlaylists = require("./controllers/Playlists.js");
const ControllerSongs = require("./controllers/Songs.js");
class App {
  #users = new ControllerUsers();
  #artists = new ControllerArtists();
  #playlists = new ControllerPlaylists();
  #songs = new ControllerSongs();
  #auth = null;

  signup(username, password, email) {
    if (!this.#auth) {
      const userCreated = this.#users.create(username, password, email);
      console.log(userCreated);
    } else console.log("You are already logged in");
  }

  login(username, password) {
    if (!this.#auth) {
      const user = this.#users.read(username, password);
      if (!!user) {
        this.#auth = user;
        console.log("You are logged in");
      } else console.log("Invalid credentials");
    } else console.log("You are already logged in");
  }
}
module.exports = App;
