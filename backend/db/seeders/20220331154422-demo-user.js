'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {email: 'demo@user.io',username: 'Demo-lition',hashedPassword: bcrypt.hashSync('password')},
      {email: 'edwin@gmail.com', username: 'edwin', hashedPassword: bcrypt.hashSync('password')},
      {email:'BABY@KEEM.com',username:'BABY KEEM',hashedPassword: bcrypt.hashSync('password')},
      {email:'Kanye@gmail.com',username:'Kanye',hashedPassword: bcrypt.hashSync('password')},
      {email:'Cults@gmail.com',username:'Cults',hashedPassword: bcrypt.hashSync('password')},
      {email:'Estelle@gmail.com',username:'Estelle',hashedPassword: bcrypt.hashSync('password')},
      {email:'Earl@Sweatshirt.com',username:'Earl Sweatshirt',hashedPassword: bcrypt.hashSync('password')},
      {email:'Steve@Lacy.com',username:'Steve Lacy',hashedPassword: bcrypt.hashSync('password')},
      {email:'Boa@gmail.com',username:'Boa',hashedPassword: bcrypt.hashSync('password')},
      {email:'Frank Ocean',username:'Frank Ocean',hashedPassword: bcrypt.hashSync('password')},
      {email:'Spongebob@gmail.com',username:'Spongebob',hashedPassword: bcrypt.hashSync('password')},
      {email:'DAFT@PUNK.com',username:'DAFT PUNK',hashedPassword: bcrypt.hashSync('password')},
      {email:'Daniel@Caesar.com',username:'Daniel Caesar',hashedPassword: bcrypt.hashSync('password')},
      {email:'Gorillaz@gmail.com',username:'Gorillaz',hashedPassword: bcrypt.hashSync('password')},
      {email:'Studio@Ghibli.com',username:'Studio Ghibli',hashedPassword: bcrypt.hashSync('password')},
      {email:'After@Hours.com',username:'After Hours',hashedPassword: bcrypt.hashSync('password')},
      {email:'joji@gmail.com',username:'joji',hashedPassword: bcrypt.hashSync('password')},
      {email:'Childish@Gambino.com',username:'Childish Gambino',hashedPassword: bcrypt.hashSync('password')},
      {email:'Nas@lil.com',username:'Lil Nas X',hashedPassword: bcrypt.hashSync('password')},
      {email:'LImperatrice@gmail.com',username:"L'Imperatrice",hashedPassword: bcrypt.hashSync('password')},
      {email:'JCole@gmail.com',username:'J. Cole',hashedPassword: bcrypt.hashSync('password')},
      {email:'Matt@Kim.com',username:'Matt & Kim',hashedPassword: bcrypt.hashSync('password')},
      {email:'Kendrick@Lamar.com',username:'Kendrick Lamar',hashedPassword: bcrypt.hashSync('password')},
      {email:'Nelly@gmail.com',username:'Nelly',hashedPassword: bcrypt.hashSync('password')},
      {email:'Drake@gmail.com',username:'Drake',hashedPassword: bcrypt.hashSync('password')},
      {email:'Tyler@gmail.com',username:'Tyler, The Creator',hashedPassword: bcrypt.hashSync('password')},
      {email:'eminem@gmail.com',username:'eminem',hashedPassword: bcrypt.hashSync('password')},
      {email:'Tatsuro@gmail.com',username:'Tatsuro Yamashita',hashedPassword: bcrypt.hashSync('password')},
      {email:'ROCKY@gmail.com',username:'A$AP ROCKY',hashedPassword: bcrypt.hashSync('password')},
      {email:'Earth@gmail.com',username:'Earth, Wind & Fire',hashedPassword: bcrypt.hashSync('password')},
      {email:'Ravyn@gmail.com',username:'Ravyn Lenae',hashedPassword: bcrypt.hashSync('password')},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
