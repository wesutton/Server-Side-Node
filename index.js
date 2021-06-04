require("dotenv).config();
const express = require('express');
const app = express();
const cors = require("cors");
const sequelize = require('./db');
const user = require("./controllers/usercontroller");


const agenda = require('./controllers/agendaController');

sequelize.sync();
app.use(require('./middleware/headers'));

app.use(cors())
app.use(express.json());
app.use('/user', user);
app.use('/agenda', agenda);
app.use('/toDo', toDo)

		
app.listen(3000,()=> console.log("Listening on port 3000"));

