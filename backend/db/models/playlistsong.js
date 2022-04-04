'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlaylistSong = sequelize.define('PlaylistSong', {
    playlistId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});
  PlaylistSong.associate = function(models) {
    // associations can be defined here
  };
  return PlaylistSong;
};