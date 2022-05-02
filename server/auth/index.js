const router = require('express').Router();
// const User = require('../db');
const User = require('../db/models/User');
const Profile = require('../db/models/Profile');


// login -> checks to see if user is valid
router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});


// signup -> creates user and generates a token, prob so they stay logged in
router.post("/signup", async (req, res, next) => {
  try {
    const {username, password, email} = req.body
    const user = await User.create({username, password, email});
    await Profile.create({userId: user.id})
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

// me -> sends back user
router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
