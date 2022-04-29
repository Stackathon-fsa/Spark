const  Sequelize  = require("sequelize")
const db = require("../db")

// defaults are empty immediately when user is created, should prob take user straight to profile page to edit
// bio could go string or text depending on if we want the user to give their life story
const Profile = db.define('profile', {
  bio: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  interests: {
    type: Sequelize.STRING
  },
  gold: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Profile;
