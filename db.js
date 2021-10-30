const {Sequelize} = require('sequelize');

const db = new Sequelize("postgres://postgres:5d170bf185294620b01d4a0dbda02af1@localhost:5432/animal-server");

module.exports = db;