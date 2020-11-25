const express = require('express');
const router = express.Router();
const db = require('../models');
const journal = require('../models/journal');
const {Journal} = db;
const { Op } = require("sequelize");

function isUnique(date,id){
    return Journal.findOne({where:{dateOnly:date,requesterID:id}})
    .then(req=>{
       alert(req)

    })
}
router.post('/create', (req,res) => {
    let {dateOnly} = req.body;
    let {totalCalories} = req.body;
    let {requesterID} =req.body;
    // isUnique(dateOnly,requesterID).then(exist =>{
    //     if(exist){
    //         console.log("EXIST");
    //     }else{
    //         Journal.create({ dateOnly, totalCalories, requesterID })
    //             .then(journal => {
    //                 res.status(201).json(journal);
    //             })
    //             .catch(err => {
    //                 res.status(400).json(err);
    //             });
    //     }
    // })
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
  
    Journal.findAll({where: {
        [Op.and]:[
        {requesterID: id},
        { dateOnly: day}
        ]
    }})
        .then(journal => {
            if(!journal) {
                return res.sendStatus(404);
            }
            journal.totalCalories = req.body.totalCalories;
            let requesterID=req.params.requesterID;
            let dateOnly=req.params.dateOnly;
            Journal.update({ totalCalories: req.body.totalCalories }, { where: { requesterID, dateOnly} })
                .then(journal => {
                    res.json(journal);
                })
                .catch(err => {
                    res.status(400).json(err);                
                });
        });
});

router.get('/getCalories/:requesterID/:dateOnly',(req,res)=>{
    const id=req.params.requesterID;
    const day=req.params.dateOnly;
    
    return Journal.findOne({where:{
        requesterID:id,
        dateOnly:day
    }}).then(journal =>{
        if(!journal){
            return res.sendStatus(404);
        }
        res.json(journal);

    })
})
module.exports = router;