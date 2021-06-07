const { DataTypes } = require('sequelize');
const db = require('../db');

module.exports = db.define('agendas', {
    date: {
        type: DataTypes.DATE, 
        allowNull: false,
    },
    start: {
        type: DataTypes.TIME, 
        allowNull: false,
    },
    end: {
        type: DataTypes.TIME, 
        allowNull: false,
    },
    priority: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    item: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    
})


