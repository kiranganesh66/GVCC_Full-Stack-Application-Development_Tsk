
const express = require("express");
const { registerUser, authUser } = require("../controllers/authController");
const { getChartData } = require("../controllers/chartController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.get("/chart", protect, getChartData);

module.exports = router;
