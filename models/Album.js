class ModelAlbum {
  constructor(
    nameAlbum,
    artist,
    genre,
    source,
    performed,
    year,
    duration,
    title,
    idArtist,
    idAlbum,
    songs
  ) {
    this.nameAlbum = nameAlbum;
    this.songs = [];
    this.artist = artist;
    this.genre = genre;
    this.source = source;
    this.performed = performed;
    this.year = year;
    this.duration = duration;
    this.title = title;
    this.idArtist = Math.random();
    this.idAlbum = Math.random();
  }
}

module.exports = ModelAlbum;
