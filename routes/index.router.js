const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

const ctrlUser = require("../controllers/user.controller");

router.post("/register", ctrlUser.register);

module.exports = router;