const router = require("express").Router();

const categoryRoutes = require("./category-routes");
const productRoutes = require("./dog-routes");

const userroutes = require("./userroutes");

const petfinder = require("./petfinder-routes");

router.use("/categories", categoryRoutes);
router.use("/dogs", productRoutes);

router.use("/User", userroutes);
router.use("/petfinder", petfinder);

module.exports = router;
