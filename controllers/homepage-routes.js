const router = require('express').Router();

router.get('/', async (req,res) => {
    res.render('homePage', {layout: 'main2'});
})

module.exports = router;

