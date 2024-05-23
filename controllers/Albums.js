const ModelAlbum = require("../models/Album.js");
const ControllerSongs = require("./Songs.js");
class ControllerAlbums {
  controllerSongs = new ControllerSongs();
  #albums = [];

  create(
    nameAlbum,
    idAlbum,
    artist,
    genre,
    source,
    performed,
    year,
    duration,
    title,
    idArtist
  ) {
    const album = new ModelAlbum(
      nameAlbum,
      idAlbum,
      artist,
      genre,
      source,
      performed,
      year,
      duration,
      title,
      idArtist
    );
    this.#albums.push(song);
    return song;
  }

  read() {
    return this.#albums;
  }

  readBy(key, value) {
    return this.#albums.filter(function (album) {
      return album[key] === value;
    });
  }
}

moudel.exports = ControllerAlbums;
