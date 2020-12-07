const express = require('express');
const router = express.Router();
const db = require('../models');
const entry = require('../models/entry');
const {Entry} = db;

// route: /api/entries/create
router.post('/create', (req, res) => {
    // let {entryID} = req.body;
    let {food} = req.body;
    let {totalCalories} = req.body;
    let {dateOnly} = req.body;
    let {requesterID} = req.body;
    let {mealID} = req.body;
    let {servingSize}= req.body;

    Entry.create({ food, totalCalories,servingSize,dateOnly, requesterID, mealID})
        .then(entry => {
            res.status(201).json(entry);
        })
        .catch(err => {
            res.status(400).json(err);
        });

});
// router.get('getEntry/:requesterId/:dateOnly', (req,res) => {
//     let requesterIdPromise = Entry.findByPk({where: {requesterID: req.params}});
//     let dateOnlyPromise = Entry.findOne({where: {dateOnly: req.params}});

// router.get('/getEntry/:requesterID/:mealID', (req,res) => {
//      const id = req.params.requesterID;
//      const day = req.params.mealID;
//     return Entry.findAll({where: {requesterID:id}})
//         .then(entry => {
//             let date = Entry.findOne({where: {dateOnly:day}})
//                 if(!date) {
//                     return res.sendStatus(404);
//                 };
//             res.json(entry);
//             });
//         });
// route: /api/entries/getEntry/1/2020-11-09
router.get('/getEntry/:requesterID/:dateOnly',(req,res) => {
    const id = req.params.requesterID;
    const day = req.params.dateOnly;
    return Entry.findAll({where:{
        requesterID: id,
        dateOnly: day

    }})
        .then(entry => 
            {
                if(!entry){
                    return res.sendStatus(404);
                };
                res.json(entry);
            });
});
    

router.get('/:id', (req,res) => {
    const {id}= req.params;
    Entry.findByPk(id)
        .then(entry => {
            if(!entry) {
                return res.sendStatus(404);
            }
            res.json(entry);
        });
});


module.exports = router;