const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Agenda = sequelize.import('../models/agenda.js');



//      Create an Agenda Item

router.post('/create', (req, res) => {
    Agenda.create( {
        date: req.body.agenda.date,
        start: req.body.agenda.start,
        end: req.body.agenda.end,
        priority: req.body.agenda.priority,
        item: req.body.agenda.item
    })
    .then(agenda => res.status(200).json({ message: 'Item Created', agenda}))
    .catch(err => res.status(500).json({ message: 'Item Failed', error: err}))
    })

    
//      Get All Agenda Items

router.get('/entries', (req, res) => {
    console.log(req.params);
    Agenda.findAll() 
    .then(agenda => res.status(200).json({ message: 'Your Agenda items', agenda}))
    .catch(err => res.status(500).json({ message: 'Search Failed', error: err}))
})


//      Get today's agenda

router.get('/:date', (req, res) => {
    let strDate = req.params.date
    let baseDate = new Date(strDate)
    let date = new Date()
    date.setDate(baseDate.getDate())
    console.log(date.toDateString())
    Agenda.findAll( {
        where: { date: date }
    } )

    .then(agenda => res.status(200).json({ message: 'Your Agenda items', agenda}))
    .catch(err => res.status(500).json({ message: 'Search Failed', error: err}))
})


 //      Update Agenda Item
router.put('/update/:id', (req, res) => {
    const updateAgendaItem = {
        id: req.body.agenda.id,
        date: req.body.agenda.date,
        start: req.body.agenda.start,
        end: req.body.agenda.end,
        priority: req.body.agenda.priority,
        item: req.body.agenda.item
    };
    const query = { where: { id: req.params.id } };

    Agenda.update(updateAgendaItem, query)
        .then((agenda) => res.status(200).json({ message: `Item  #${ req.params.id } has been updated`, agenda}))
        .catch((err) => res.status(500).json({ error: err}));
});


     //  Delete Agenda Item

    router.delete('/delete/:id', (req, res) => {
        Agenda.destroy({ where: { id: req.params.id } })
    .then(deleted => res.status(200).json({ message: `Item  #${ req.params.id } has been deleted`, deleted}))
    .catch(err => res.status(500).json({ message: 'Error', error: err }))
})



module.exports = router;
