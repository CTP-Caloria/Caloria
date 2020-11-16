const express = require('express');
const router = express.Router();
const db = require('../models');
const mealType = require('../models/mealType');
const {MealType} = db;

router.post('/create', (req,res) => {
    let {mealType} = req.body;
   
    MealType.create({mealType})
       .then(meal => {
           res.status(201).json(meal);
       })
       .catch(err => {
           res.status(400).json(err);
       });
   })

router. get('/:id', (req,res) => {
    const {id} =req.params;
    MealType.findByPk(id)
        .then(meal => {
            if(!meal) {
                return res.sendStatus(404);
            }
            res.json(meal);
        });
});
   
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    Journal.findByPk(id)
        .then(meal => {
            if(!meal) {
                return res.sendStatus(404);
            }
            meal.destroy();
            res.sendStatus(204);
        });
});


module.exports = router; 