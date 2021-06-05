const express = require('express');
const router = express.Router();
const { query } = require('express');
const sequelize = require('../db');
// const ToDo = new Sequelize.import('../models/toDo');
const ToDo = require('../models/toDo');


router.get("/practice", function(req, res){
    res.send("This is a practice route")
})

router.post('/add', (req, res) =>{
    res.header("Access-Control-Allow-Origin: * ");
    ToDo.create({
        item: req.body.toDo.item,
        priority: req.body.toDo.priority,
        dueDate: req.body.toDo.dueDate,
        dueTime: req.body.toDo.dueTime
    })
    .then (toDo=> res.status(200).json({ message: 'Item Created', toDo}))
    .catch(err => res.status(500).json({error: err}))
});


router.get('/list', (req, res) => {
    res.header("Access-Control-Allow-Origin: * ");
    ToDo.findAll() 

.then(toDo => res.status(200).json({ message: 'Item Created', toDo}))
.catch(err => res.status(500).json({ message: 'Item Failed', error: err}))
})

router.put('/update/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin: * ");
    ToDo.update(req.body, { where: { id: req.params.id }})
.then(updated => res.status(200).json({ message: 'Update successful', updated}))
.catch(err => res.status(500).json({ message: 'Update failed!', err }))
})


router.delete('/delete/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin: * ");
    ToDo.destroy({ where: { id: req.params.id } })
.then(deleted => res.status(200).json({ message: `Item  #${ req.params.id } has been deleted`, deleted}))
.catch(err => res.status(500).json({ message: 'Error', error: err }))
})
 module.exports = router;