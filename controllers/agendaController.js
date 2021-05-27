const router = require('express').Router();
const { query } = require('express');
const Agenda = require('../models/agenda');


//    CREATE AGENDA ITEM

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

//   Get All Agenda Items

    router.get('/entries', (req, res) => {
        Agenda.findAll() 
    
    .then(agenda => res.status(200).json({ message: 'Item Created', agenda}))
    .catch(err => res.status(500).json({ message: 'Item Failed', error: err}))
})

//  Update Agenda Item

    router.put('/items/:id', (req, res) => {
        Agenda.update(req.body, { where: { id: req.params.id }})
    .then(updated => res.status(200).json({ message: 'Update worked', updated}))
    .catch(err => res.status(500).json({ message: 'Update failed!', err }))
})

//  Delete Agenda Item

    router.delete('/delete/:id', (req, res) => {
        Agenda.destroy({ where: { id: req.params.id } })
    .then(deleted => res.status(200).json({ message: `Item  #${ req.params.id } has been deleted`, deleted}))
    .catch(err => res.status(500).json({ message: 'Error', error: err }))
})


module.exports = router;
