const router = require('express').Router();
const categoryRoutes = require('./category-routes');
//const productRoutes = require('./dog-routes');
const petfinder = require('./petfinder-routes');



router.use('/categories', categoryRoutes);
//router.use('/dogs', productRoutes);
router.use('/petfinder', petfinder);
const userroutes = require("./userroutes");

// const petfinder = require("./petfinder-routes");




router.use("/User", userroutes);



module.exports = router;
