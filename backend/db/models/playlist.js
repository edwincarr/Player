'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Playlist.associate = function(models) {
    // associations can be defined here
    Playlist.belongsTo(models.User, {foreignKey : 'userId'})
    Playlist.belongsToMany(models.Song, {through: 'PlaylistSongs', foreignKey: 'playlistId'})
  };
  return Playlist;
};
