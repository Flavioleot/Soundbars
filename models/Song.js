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
    producer
  ) {
    this.idSong = idSong;
    this.nameSong = nameSong;
    this.source = source;
    this.feat = feat;
    this.writer = writer;
    this.producer = producer;
    this.performed = performed;
    this.artist = artist;
    this.genre = genre;
  }
}

module.exports = ModelSong;
