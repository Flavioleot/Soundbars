const ModelPlaylist = require("../models/Playlist.js");
const ControllerSongs = require("./Songs.js");

class ControllerPlaylist {
  controllerSongs = new ControllerSongs();
  #playlists = [];
  createPlaylist(idPlaylist, namePlaylist) {
    const playlist = new ModelPlaylist(idPlaylist, namePlaylist);
    this.#playlists.push(playlist);
    return playlist;
  }
  deletePlaylist(idPlaylist) {
    const playlist = this.#playlists.find(
      (playlist) => playlist.idPlaylist === idPlaylist
    );
    this.#playlists = this.#playlists.filter(
      (playlist) => playlist.idPlaylist !== idPlaylist
    );
    return playlist;
  }

  addSongToPlaylist(idPlaylist, idSong) {
    const playlist = this.#playlists.find(
      (playlist) => playlist.idPlaylist === idPlaylist
    );
    const song = this.controllerSongs
      .getSongs()
      .find((song) => song.idSong === idSong);
    playlist.songs.push(song);
    return playlist;
  }

  removeSongFromPlaylist(idPlaylist, idSong) {
    const playlist = this.#playlists.find(
      (playlist) => playlist.idPlaylist === idPlaylist
    );
    playlist.songs = playlist.songs.filter((song) => song.idSong !== idSong);
    return playlist;
  }
}

module.exports = ControllerPlaylist;
