const Sequelize = require('sequelize');

const sequelize = new Sequelize("user-info", "postgres", "password", {
    host: "localhost",
    dialect: "postgres"
});

sequelize
    .authenticate()
    .then(
    function(){
        console.log("connected to the user-info postgres database");
    },

    function(err){
        console.log(err);
    }
);
module.exports = sequelize;