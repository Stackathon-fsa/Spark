const router = require("express").Router()
const { Profile, Matches } = require("../db")

module.exports = router
// mounted on /api/profiles

// GET /api/profiles/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    // finding all profiles the user has interacted with from the matches table
    const matches = await Matches.findAll({
      where: { userId: req.params.userId },
    })
    const profiles = await Profile.findAll()

    // hashTable faster lookup
    const interactedWith = {};
    matches.forEach(match => interactedWith[match.matchId] = true);

    //filter out all the profiles that have already been interacted with
    const freshProfiles = profiles.filter((profile) => !(profile.userId in interactedWith) && profile.userId !== req.params.userId)

    res.json(freshProfiles)
  } catch (err) {
    next(err)
  }
})

//GET /api/profiles
router.get("/", async (req, res, next) => {
  try {
    const profiles = await Profile.findAll()
    res.json(profiles)
  } catch (err) {
    next(err)
  }
})
