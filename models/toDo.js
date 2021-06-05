// const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const database = require('../db');


module.exports = database.define('toDo', {
    item: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    priority: {
        type: DataTypes.STRING,
    },
    dueDate:{
        type: DataTypes.DATEONLY,
    } ,
    dueTime: {
        type: DataTypes.TIME,
    }
})