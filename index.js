require("dotenv").config();
let express = require("express")
const app = express();
const sequelize = require("./db")
const user = require("./controllers/usercontroller");
const toDo = require("./controllers/toDoController");

sequelize.sync();

app.use(express.json())
app.use('/user', user);
app.use('/toDo', toDo)

app.listen(3000,()=> console.log("Listening on port 3000"));