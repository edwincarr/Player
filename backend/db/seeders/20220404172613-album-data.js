'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Albums', [
        {userId: 1, title: 'test', imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2018/08/Kanye-West-Graduation-album-cover-web-optimised-820.jpg' },
        {userId: 2, title: 'failure', imageUrl: 'https://i1.sndcdn.com/artworks-j2TNlyd9yRYDFaXQ-V0v3yA-t500x500.jpg'}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Albums', null, {});
  }
};
