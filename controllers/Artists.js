const ModelArtist = require("../models/Artist.js");

class ControllerArtists {
  #artists = [];

  create(idArtist, nameArtist, songs, album, playlist) {
    const artist = new ModelArtist(
      idArtist,
      nameArtist,
      songs,
      album,
      playlist
    );
    this.#artists.push(artist);
    return artist;
  }
}

module.exports = ControllerUsers;
