const express = require('express');
const router = express.Router();
const db = require('../models');
const journal = require('../models/journal');
const {Journal} = db;

router.post('/create', (req,res) => {
    let {mealType} = req.body;
   
    Journal.create({mealType})
       .then(journal => {
           res.status(201).json(journal);
       })
       .catch(err => {
           res.status(400).json(err);
       });
   })

router. get('/:id', (req,res) => {
    const {id} =req.params;
    Journal.findByPk(id)
        .then(journal => {
            if(!journal) {
                return res.sendStatus(404);
            }
            res.json(journal);
        });
});
   
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    Journal.findByPk(id)
        .then(journal => {
            if(!journal) {
                return res.sendStatus(404);
            }
            journal.destroy();
            res.sendStatus(204);
        });
});


module.exports = router; 