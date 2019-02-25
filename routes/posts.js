const express = require("express");
const router = express.Router();

// @route /api/posts/test
// desc   tests posts route
// access public
router.get("/test", (req, res) => {
  res.json({ msg: "post is working" });
});
module.exports = router;
