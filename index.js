require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();
// const cors = require("cors");
const sequelize = require('./db');
const user = require('./controllers/usercontroller');
const toDo = require('./controllers/toDoController');
const agenda = require('./controllers/agendaController');

sequelize.sync();
app.use(require('./middleware/headers'));
app.use(cors())
app.use(express.json());
app.use('/user', user);
app.use('/agenda', agenda);
app.use('/toDo', toDo)

		
app.listen(process.env.PORT,()=> console.log(`Listening on port ${process.env.PORT}`));

