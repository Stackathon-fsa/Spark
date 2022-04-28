const { db } = require("../server/db")
const { User } = require("../server/db")

// const users = [
//   {
//     username: "mark",
//   },
// ]

const seed = async () => {
  try {
    await db.sync({ force: true })

    const user1 = await User.create({
      username: "spencer69",
    })
      
  } catch (err) {
    console.log(err)
  }
}

module.exports = seed
if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding success!")
      db.close()
    })
    .catch((err) => {
      console.error("Oh noes! Something went wrong!")
      console.error(err)
      db.close()
    })
}
