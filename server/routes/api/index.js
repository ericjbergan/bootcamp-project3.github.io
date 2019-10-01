const router = require("express").Router();

//1 require for each route type
const subRoutes = require("./subscription");

//one 'use()' for each route type
router.use("/subscription", subRoutes);

module.exports = router;
