const router = require("express").Router();
const categoryRoutes = require("./category-routes");
//const productRoutes = require('./dog-routes');
const petfinder = require("./petfinder-routes");
const userroutes = require("./userroutes");
const contactRoutes = require('./contact-api')


router.use("/user", userroutes);

router.use("/categories", categoryRoutes);
//router.use('/dogs', productRoutes);
router.use("/petfinder", petfinder);


router.use("/User", userroutes);
router.use("/contact", contactRoutes)

module.exports = router;
