const sequelize = require('sequelize');
const database = require('../db');


const toDo = database.define('toDo', {
    item: {
        type: sequelize.STRING,
        allowNull: false,
    },
    priority: {
        type: sequelize.STRING,
        allowNull: false,
    },
    dueDate:{
        type: sequelize.DATE,
    } ,
    dueTime: {
        type: sequelize.TIME,
    }
});


module.exports = toDo;