const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const toDo = require('../models/toDo');
const ToDo = sequelize.import('../models/toDo.js') ;
// const jwt = require("jsonwebtoken");

// router.get("/practice", function(req, res){
//     res.send("This is a practice route")
// })

router.create('/add', function(req, res){
    ToDo.add({
        item: req.body.toDo.item,
        priority: req.body.toDo.priority,
        dueDate: req.body.toDo.dueDate,
        dueTime: req.body.toDo.dueTime
    })
    .then (
        function postSuccess(toDo){
            res.json({
                toDo: toDo,
                message: "To Do item added successfully"
            });
        }
    )
    .catch(err => res.status(500).json({error: err}))
});
 module.exports = router;