const Sequelize = require("sequelize")
const db = require("../db")

const Matches = db.define("matches", {
    like: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
})

module.exports = Matches ;
