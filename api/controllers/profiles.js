const express = require('express');
const router = express.Router();
const db = require('../models');
const entry = require('../models/entry');
const user = require ('../models/user');
const {User} = db;

// api/profiles/1
router.get('/:id',(req,res ) => {
    const {id} = req.params;
    User.findByPk(id)
        .then(user =>{
            if(!user) {
                return res.sendStatus(404);
            }
            res.json(user);
        });
});
router.get('/findEmail/:email', (req,res) => {
    const address = req.params.email;
    User.findOne({where : {
        email: address
    }})
    .then(entry =>
        {
           if(!entry){
               return res.sendStatus(404);
           };
           res.json(entry);
        });
});

module.exports = router;