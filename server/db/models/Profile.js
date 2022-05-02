const  Sequelize  = require("sequelize")
const db = require("../db")

// defaults are empty immediately when user is created, should prob take user straight to profile page to edit
// bio could go string or text depending on if we want the user to give their life story
const Profile = db.define("profile", {
  name: {
    type: Sequelize.STRING
  },
  bio: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  interests: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://preview.redd.it/en7ywgsywlr01.png?auto=webp&s=0cbf978b59a69aade04b902401f4ee7260141006",
  },
  gold: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
})

module.exports = Profile;
