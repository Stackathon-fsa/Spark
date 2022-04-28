const { db } = require("./db")
const app = require("./app")
const seed = require("../script/seed")
const PORT = process.env.PORT || 19006

const init = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed()
    } else {
      await db.sync()
    }
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`[BACKEND]it up on port ${PORT}`))
  } catch (ex) {
    console.log(ex)
  }
}

init()
