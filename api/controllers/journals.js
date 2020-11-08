const express = require('express');
const router = express.Router();
const db = require('../models');
const {Journal} = db;



router.post('/create', (req,res) => {
 let {mealType} = req.body;

 Journal.create({mealType})
    .then(post => {
        res.status(201).json(post);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

module.exports = router; 