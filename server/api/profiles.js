const router = require("express").Router()
const { Profile, Matches } = require("../db")

module.exports = router
//  Here we are "mounted on" (starts with) /api/profiles


// GET /api/profiles/:userId
router.get("/:userId", async (req, res, next) => {
  console.log("REQ PARAMSSSSSSS", req.params.userId)
  
  try {
    console.log("Profile Backend DB Query!")

    //matches will be an array containing all the actions a user has completed
    //we want to filter out all the matchId from our profiles that we fetched 
    const matches = await Matches.findAll({
      where: { userId: req.params.userId },
    })
    const profiles = await Profile.findAll()

    const idsWeDontWant = matches.map((match) => {
      return match.matchId;
    })

      //filter out all the profiles that have already been interacted with
    const freshProfiles = profiles.filter((profile) => {
      if (!idsWeDontWant.includes(profile.userId)) {
        return profile;
      }
    })

    res.json(freshProfiles)
  } catch (err) {
    next(err)
  }
})




//GET /api/profiles
router.get("/", async (req, res, next) => {
  try {
    console.log("Profile Backend DB Query!")
    const profiles = await Profile.findAll()
    res.json(profiles)
  } catch (err) {
    next(err)
  }
})


