require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const sequelize = require('./db');
const user = require('./controllers/usercontroller');
const toDo = require('./controllers/toDoController');
const agenda = require('./controllers/agendaController');

sequelize.sync();
app.use(require('./middleware/headers'));
app.use(cors())
app.use(express.json());
app.use('/models/user', user);
app.use('/models/agenda', agenda);
app.use('/models/toDo', toDo)

		
app.listen(3001,()=> console.log("Listening on port 3000"));

