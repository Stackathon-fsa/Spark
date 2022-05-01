const router = require("express").Router()
const { User, Profile } = require("../db")

module.exports = router
//  Here we are "mounted on" (starts with) /api/users

//GET /api/users
router.get("/", async (req, res, next) => {
  try {
    console.log('YOOOOOOOOOOOOOOOOO')
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET /api/users/:userId
// creating this to only fetch a user profile
router.get("/:userId", async (req, res, next) => {
  try {
    const profile = await Profile.findOne({
      where: {
        userId: req.params.userId
      }
    })
    res.json(profile)
  } catch (err) {
    next(err)
  }
})
