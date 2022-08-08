const router = require('express').Router();

router.get('/', async (req,res) => {
    res.render('homePage');
})

module.exports = router;