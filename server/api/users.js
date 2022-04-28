const router = require("express").Router()
const { User } = require("../db")

module.exports = router
//  Here we are "mounted on" (starts with) /api/users
console.log("YOOOOOOOOOOOOOOOOO")
console.log("YOOOOOOOOOOOOOOOOO")
      console.log("YOOOOOOOOOOOOOOOOO")
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