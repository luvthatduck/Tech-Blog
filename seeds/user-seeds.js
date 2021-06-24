const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'MrBig',
    email: 'mrbig@email.com',
    password: 'password123'
  },
  {
    username: 'Carrie',
    email: 'carriefromnewyork@email.com',
    password: 'password123'
  },
  {
    username: 'JaNizzle',
    email: 'janizzfromthe209@email.com',
    password: 'password123'
  },
  {
    username: 'Wilbur',
    email: 'oink@email.com',
    password: 'password123'
  },
  {
    username: 'SpongeBob',
    email: 'sb@email.com',
    password: 'password123'
  }

  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;