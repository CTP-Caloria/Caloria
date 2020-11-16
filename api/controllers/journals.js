const express = require('express');
const router = express.Router();
const db = require('../models');
const journal = require('../models/journal');
const {Journal} = db;


router.post('/create', (req,res) => {
    let {dateOnly} = req.body;
    let {totalCalories} = req.body;
    let {requesterID} =req.body;
    Journal.create({dateOnly,totalCalories,requesterID})
        .then(journal => {
            res.status(201).json(journal);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put('/update/:requesterID/:dateOnly', (req,res) => {
    const id = req.params.requesterID;
    const day = req.params.dateOnly;
    Journal.findOne({where: {
        requesterID: id,
        dateOnly: day,
    }})
        .then(journal => {
            if(!journal) {
                return res.sendStatus(404);
            }
            journal.totalCalories = req.body.totalCalories;
            journal.save()
                .then(journal => {
                    res.json(journal);
                })
                .catch(err => {
                    res.status(400).json(err);                
                });
        });
});
module.exports = router;