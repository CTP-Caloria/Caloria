const express = require('express');
const router = express.Router();


// Load each controller
const postsController = require('./posts.js');
const appConfigController = require('./appConfig.js');
const authController = require('./auth'); 
const journalsController = require('./journals');
const usersController = require('./users');
const entriesController = require('./entries');


// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/posts', postsController);
router.use('/application-configuration', appConfigController);
router.use('/auth', authController);
router.use('/journals', journalsController);
router.use('/users', usersController);
router.use('/entries', entriesController);

module.exports = router;