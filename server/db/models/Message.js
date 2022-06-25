const  Sequelize  = require("sequelize")
const db = require("../db")

const Message = db.define('message', {
  info: {
    type: Sequelize.STRING
  },
  recepientId: {
    type: Sequelize.INTEGER
  }
})

module.exports = Message;
