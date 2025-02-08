const express = require("express");
const router = express.Router();

const moduleRoutes = [{}];

moduleRoutes.forEach((el) => router.use(el.path, el.route));

module.exports = router;
