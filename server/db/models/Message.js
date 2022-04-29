const  Sequelize  = require("sequelize")
const db = require("../db")

// displaying them might be weird ... how do you display in order? timestamp?
const Message = db.define('message', {
  info: {
    type: Sequelize.STRING
  },
  recepientId: {
    type: Sequelize.INTEGER
  }
})

module.exports = Message;
