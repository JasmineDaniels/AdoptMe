const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./dog-routes');


router.use('/categories', categoryRoutes);
router.use('/dogs', productRoutes);

module.exports = router;
