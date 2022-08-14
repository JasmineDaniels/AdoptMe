const router = require('express').Router();

const categoryRoutes = require('./category-routes');
const productRoutes = require('./dog-routes');
const userroutes = require('./userroutes');


router.use('/categories', categoryRoutes);
router.use('/dogs', productRoutes);
router.use('/User', userroutes);

module.exports = router;
