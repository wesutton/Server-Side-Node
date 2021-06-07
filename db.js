const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
});

// sequelize
//     .authenticate()
//     .then(
//     function(){
//         console.log("connected to the user-info postgres database");
//     },

//     function(err){
//         console.log(err);
//     }
// );
module.exports = db;