const express = require("express");
const router = express.Router();

// @route /api/users/test
// desc   tests user route
// access public
router.get("/test", (req, res) => {
  res.json({ msg: "user is working" });
});

module.exports = router;
