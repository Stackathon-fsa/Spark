//this is the access point for all things database related!
const db = require("./db")
const User = require("./models/User")
const Profile = require("./models/Profile")
const Message = require("./models/Message")


// one-to-one
User.hasOne(Profile);
Profile.belongsTo(User);

// one-to-many
User.hasMany(Message);
Message.belongsTo(User);

// through table with itself
User.belongsToMany(User, {through: "user_matches", as: "matches"});


module.exports = {
  db,
  User,
  Message,
  Profile
}
