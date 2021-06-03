const express = require('express');
const app = express();
const cors = require("cors");
const sequelize = require('./db');


const agenda = require('./controllers/agendaController');

sequelize.sync();

app.use(cors())
app.use(express.json());
app.use('/agenda', agenda);




app.listen(5001,()=> console.log("Listening on port 5000"));

