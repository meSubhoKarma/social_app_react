const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Profile = require("../../models/Profile");
const User = require("../../models/User");
/*
// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Profile model"));

module.exports = router;
*/

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  "Private"
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );

    //if there's no profile
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    // if there's a profile
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
