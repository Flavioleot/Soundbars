class ModelArtist {
  constructor(idArtist, nameArtist, songs, album, playlist) {
    this.idArtist = idArtist;
    this.nameArtist = nameArtist;
    this.songs = songs;
    this.playlist;
    this.album;
  }
}

module.exports = ModelArtist;
