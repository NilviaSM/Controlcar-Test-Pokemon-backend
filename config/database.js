const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('controlcar_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
