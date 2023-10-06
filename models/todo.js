const database = require('../util/database');
const Sequelize = require('sequelize');

const Todo = database.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    todo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }

});
module.exports = Todo;