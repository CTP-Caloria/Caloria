const router = require('express').Router();
const { User } = require('../models');
const passport = require('../middlewares/authentication');

router.get('/whoami',
  passport.isAuthenticated(),
  (req,res)=>{
    let user = req.user;
  res.json(req.user);
});

router.post('/signup', (req, res) => {

 
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    password2: req.body.password2
  })
    .then((user) => {
      req.login(user, () => res.status(201).json(user));
    })
    .catch((err) => {
      res.status(400).json({ msg: 'Signup failed', err });
    });
});

router.post('/login',
  passport.authenticate('local'), 
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  
   
  });

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
})

module.exports = router;