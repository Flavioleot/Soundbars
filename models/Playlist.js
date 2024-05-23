class ModelPlaylist {
  constructor(idPlaylist, namePlaylist, songs) {
    this.idPlaylist = Math.random();
    this.namePlaylist = namePlaylist;
    this.songs = [];
  }
}

module.exports = ModelPlaylist;
