const router = require("express").Router()
const { Matches } = require("../db")

module.exports = router
//  Here we are "mounted on" (starts with) /api/matches

//GET /api/matches
router.get("/", async (req, res, next) => {
  try {
    const matches = await Matches.findAll()
    res.json(matches)
  } catch (err) {
    next(err)
  }
})


//POST /api/matches
router.post("/", async (req, res, next) => {
    try {
      console.log('YERRRRRRRRRR')
      res.status(201).json(
        await Matches.create({
          userId: req.body.userId,
          matchId: req.body.matchId,
          like: req.body.like,
        })
      )
  } catch (error) {
    next(error)
  }
})





