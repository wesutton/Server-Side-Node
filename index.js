require("dotenv").config();
let express = require("express")
const app = express();
const sequelize = require("./db")
const user = require("./controllers/usercontroller");

sequelize.sync();
app.use(require('./middleware/headers'));

app.use(express.json())
app.use('/user', user);


				
app.listen(3000,()=> console.log("Listening on port 3000"));