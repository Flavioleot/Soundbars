const ModelPlaylist = require("../models/Playlist.js");
const ControllerSongs = require("./Songs.js");

class ControllerPlaylist {
  controllerSongs = new ControllerSongs();
  #playlists = [];
  create(idPlaylist, namePlaylist, songs) {
    const playlist = new ModelPlaylist(idPlaylist, namePlaylist, songs);
    this.#playlists.push(playlist);
    return playlist;
  }
}

module.exports = ControllerPlaylist;
