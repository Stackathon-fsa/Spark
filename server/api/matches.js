const router = require("express").Router()
const { Matches, Message } = require("../db")

module.exports = router
// mounted on /api/matches

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
      let {userId, matchId, like} = req.body;
      // could also create a chat between two users here -> like one person? find if they like you!
      const match = await Matches.create({
        userId,
        matchId,
        like
      });

      // not using currently but should prob create a chat from this
      const isMatch = await Matches.findOne({
        where: {
          userId: matchId,
          matchId: userId
        }
      });

      res.status(201).json(match);
      // does that person like you?
      // if (isMatch) {
      //   // should we create a separate table called chats? and have one with all the messages with that chat ID?
      // }

      // res.status(201).json(
      //   await Matches.create({
      //     userId: req.body.userId,
      //     matchId: req.body.matchId,
      //     like: req.body.like,
      //   })
      // )
  } catch (error) {
    next(error)
  }
})





