const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;




// router.get('/', (req,res) => {
//     User.findAll({})
//       .then(users => res.json(users));
//   });


router.get('/:id', (req, res) => {
    const {id} = req.params;
    User.findByPk(id)
        .then(user => {
            if(!user) {
                return res.sendStatus(404);
            }
            res.json(user);
        });
});



module.exports = router;