// const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const database = require('../db');


module.exports = database.define('toDo', {
    item: {
        type: DataTypes.STRING,
        omitNull: false,
    },
    priority: {
        type: DataTypes.STRING,
        omitNull: true,
    },
    dueDate:{
        type: DataTypes.DATEONLY,
        omitNull: true,
    } ,
    dueTime: {
        type: DataTypes.TIME,
        omitNull: true,
    }
})