const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;




// router.get('/', (req,res) => {
//     User.findAll({})
//       .then(users => res.json(users));
//   });


router.get('/:userID', (req, res) => {
    const {userID} = req.params;
    User.findByPk(userID)
        .then(users => {
            if(!users) {
                return res.sendStatus(404);
            }
            res.json(users);
        });
});



module.exports = router;