class ModelSong {
  constructor(
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
    this.idSong = Math.random();
    this.nameSong = nameSong;
    this.source = source;
    this.feat = feat;
    this.writer = writer;
    this.producer = producer;
    this.performed = performed;
    this.artist = artist;
    this.genre = genre;
    this.year = year;
    this.duration = duration;
    this.title = title;
    this.idArtist = Math.random();
  }
}

module.exports = ModelSong;
