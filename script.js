class App {
  constructor() {}
}

class User {
  constructor() {
    this.id = null;
    this.usarname = null;
    this.email = null;
    this.password = null;
  }
}
class Song {
  constructor() {
    this.idSong = null;
    this.nameSong = null;
    this.source = null;
    this.feat = null;
    this.writer = null;
    this.producer = null;
    this.performed = null;
    this.artist = null;
    this.genre = null;
  }
}
class PlaylistPredefined {
  constructor() {
    this.idPlaylist = null;
    this.namePlaylist = null;
    this.songsContained = null;
  }
}

class PlaylistUser {
  constructor() {
    this.idPlaylist = null;
    this.namePlaylist = null;
    this.songsContained = null;
  }
}

class Artist {
  constructor() {
    this.idArtist = null;
    this.nameArtist = null;
    this.songsArtist = null;
    this.album = null;
    this.single = null;
  }
}

class Remix {
  constructor() {
    this.slow = null;
    this.reverb = null;
    this.speedUp = null;
  }
}
