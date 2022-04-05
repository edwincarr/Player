'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.hasMany(models.Like, {foreignKey: 'songId'})
    Song.hasMany(models.Comment, {foreignKey: 'songId'})
    Song.belongsTo(models.User, {foreignKey: 'userId'})
    Song.belongsToMany(models.Playlist, {
      through: 'PlaylistSong',
      otherKey: 'playlistId',
      foreignKey: 'songId'
    })
  };
  return Song;
};
