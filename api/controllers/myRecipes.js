const express = require('express');
const router = express.Router();
const db = require('../models');
const myRecipes = require('../models/myRecipes');
const {MyRecipes} =db;

router.post('/create', (req,res) => {
    let {name} = req.body;
    let {totalCalories} = req.body;
    let {servingSize} = req.body;
    let {unit} = req.body;
    let {instructions} = req.body;
    let {ingredients} = req.body;
    let {requesterID} =req.body;
    
    MyRecipes.create({name, totalCalories, servingSize,unit,instructions,ingredients,requesterID})
        .then(entry => {
            res.status(201).json(entry);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get('/getRecipe/:requesterID', (req,res) => {
    const id = req.params.requesterID;
    return MyRecipes.findAll({where: {requesterID:id }})
        .then(entry =>
            {
                if(!entry){
                    return res.sendStatus(404);
                };
                res.json(entry);
            });
});

module.exports = router ;