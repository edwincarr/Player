'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Playlists', [
        {userId:1, title:'self-made-bangers', imageUrl: 'https://i.scdn.co/image/ab67706f000000036bdff7dc0e53fe6ca17749b5'}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Playlists', null, {});
  }
};
