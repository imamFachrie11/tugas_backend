const express = require("express");

const router = express.Router();

const { validateToken } = require("../middlewares/auth");
const { index } = require("../controllers/mata_pembelajaran.controllers");

router.get("/", validateToken, index);

module.exports = router;