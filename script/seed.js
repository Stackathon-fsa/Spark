const { db } = require("../server/db")
const { User } = require("../server/db")

const users = [
  {
    username: "mark",
    password: "mark_pw",
    email: "mark@gmail.com"
  },
  {
    username: "brian",
    email: "brian@gmail.com",
    password: "brian_pw"
  },
  {
    username: "frank",
    email: "frank@gmail.com",
    password: "frank_pw"
  },
  {
    username: "john",
    email: "john@gmail.com",
    password: "john_pw"
  },
  {
    username: "erik",
    email: "erik@gmail.com",
    password: "erik_pw"
  }
]

const seed = async () => {
  try {
    await db.sync({ force: true })

    // const user1 = await User.create({
    //   username: "spencer69",
    // })

    await Promise.all(
      users.map(user => {
        return User.create(user);
      })
    )

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
