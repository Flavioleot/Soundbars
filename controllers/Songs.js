const ModelSong = require("../models/Song.js");

class ControllerSongs {
  #songs = [];

  create(
    nameSong,
    idSong,
    artist,
    genre,
    source,
    performed,
    feat,
    writer,
    producer,
    year,
    duration,
    title,
    idArtist
  ) {
    const song = new ModelSong(
      nameSong,
      idSong,
      artist,
      genre,
      source,
      performed,
      feat,
      writer,
      producer,
      year,
      duration,
      title,
      idArtist
    );
    this.#songs.push(song);
    return song;
  }
}

module.exports = ControllerSongs;
