//const { Pet } = require('../models');
//const { User } = require('../models');
const router = require('express').Router();

router.get('/contact', (req, res) => {
    res.render('contact');
})



module.exports = router;