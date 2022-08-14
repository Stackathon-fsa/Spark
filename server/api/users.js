const router = require("express").Router()
// const { default: user } = require("../../client/redux/user")
const { User, Profile } = require("../db")

module.exports = router
// mounted on /api/users

//GET /api/users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET /api/users/:userId
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

router.put("/:userId", async (req, res, next) => {
  try {
    const profile = await Profile.findOne({
      where: {
        userId: req.params.userId
      }
    })
    res.send(await profile.update(req.body))
  } catch (err) {
    next(err)
  }
})
