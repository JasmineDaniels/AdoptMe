const router = require('express').Router();

router.get('/', async (req,res) => {
    res.render('homePage');
});

router.get('/petfinder', async (req, res) => {
    res.render('petfinder');
});

router.get('/searchResults', async (req, res) => {
    res.render('searchResults');
});

module.exports = router;