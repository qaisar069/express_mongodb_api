const express = require("express");
const router = express.Router();

// @route /api/profile/test
// desc   tests profile route
// access public
router.get("/test", (req, res) => {
  res.json({ msg: "profile is working" });
});

module.exports = router;
