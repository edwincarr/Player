'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Songs', [
        {userId:1, title: 'banger', url: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3', imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2018/08/Kanye-West-Graduation-album-cover-web-optimised-820.jpg'},
        {userId:2, title: 'can u be', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/CanYouBeKanye.mp3', imageUrl: 'https://media.pitchfork.com/photos/5db73da8fd8a1f0009ad5c80/1:1/w_600/jesusisking_kanye.jpg'}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Songs', null, {});
  }
};
