
require("dotenv").config();
let express = require("express")
const cors = require('cors');
const app = express();
const sequelize = require("./db")
const user = require("./controllers/usercontroller");
const toDo = require("./controllers/toDoController");
const agenda = require('./controllers/agendaController');

sequelize.sync();

app.use(express.json());
app.use(cors());
app.use('/user', user);
app.use('/toDo', toDo)
app.use('/agenda', agenda);

app.listen(3000,()=> console.log("Listening on port 3000"));