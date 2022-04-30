const Sequelize = require("sequelize")
const db = require("../db")

const Matches = db.define("matches", {
    like: {
        type: Sequelize.ENUM("yes", "no"),
        defaultValue: "no",
        allowNull: false,
    },
})

module.exports = Matches ;
