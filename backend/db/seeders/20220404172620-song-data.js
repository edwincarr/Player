'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Songs', [
        {userId:1, albumId:1,title: 'banger', url: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'},
        {userId:2, albumId:2,title: 'can u be', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/CanYouBeKanye.mp3'}
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
