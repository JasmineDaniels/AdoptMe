const router = require('express').Router();
const homePageRoutes = require('./homepage-routes');
const apiRoutes = require('./api');

router.use('/', homePageRoutes)
router.use('/api', apiRoutes);



router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;