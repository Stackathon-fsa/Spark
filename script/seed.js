const { db } = require("../server/db")
const { User, Profile, Message } = require("../server/db")

const users = [
  {
    username: "mark",
    password: "mark_pw",
    email: "mark@gmail.com",
  },
  {
    username: "brian",
    email: "brian@gmail.com",
    password: "brian_pw",
  },
  {
    username: "frank",
    email: "frank@gmail.com",
    password: "frank_pw",
  },
  {
    username: "john",
    email: "john@gmail.com",
    password: "john_pw",
  },
  {
    username: "erik",
    email: "erik@gmail.com",
    password: "erik_pw",
  },
]

const profiles = [
  {
    bio: "do you like the photo of me and my fish? Yeah, widemouth grouper, you know what they say",
    age: 29,
    interests: "Non-commital business ventures ",
    gold: false,
    imageUrl: "https://thumbs.dreamstime.com/b/casual-dude-smiling-2301915.jpg",
    userId: 1
  },
  {
    bio: "can we split the bill?",
    age: 19,
    interests: "fornite/roblox/minecraft hunger games server",
    gold: false,
    imageUrl:
      "https://media.istockphoto.com/photos/funky-cool-serious-black-dude-picture-id182822374?s=612x612",
    userId: 2
  },
  {
    bio: "is anyone else sweating?",
    age: 21,
    interests: "love adventures, love food, love breathing",
    gold: false,
    imageUrl:
      "https://static3.depositphotos.com/1008005/244/i/950/depositphotos_2441782-stock-photo-dude.jpg",
    userId: 3
  },
  {
    bio: "got banned off craigslist :/",
    age: 31,
    interests: "trying to track down the zodiac killer",
    gold: false,
    imageUrl:
      "https://previews.123rf.com/images/keeweeboy/keeweeboy0706/keeweeboy070600016/980538-cool-dude-.jpg",
    userId: 4
  },
  {
    bio: "too old for this app",
    age: 45,
    interests: "one mid life crisis way from buying a jetski ",
    gold: false,
    imageUrl:
      "https://media.gettyimages.com/photos/hipster-dude-picture-id1281260617?s=2048x2048",
    userId: 5
  },
]

const messages = [
  {
    info: "hey how are ya",
    recepientId: 1,
  },
  {
    info: "top of the morning",
    recepientId: 2,
  },
  {
    info: "goodnight",
    recepientId: 3,
  },
  {
    info: "see you later",
    recepientId: 4,
  },
]



const seed = async () => {
  try {
    await db.sync({ force: true })

    // const user1 = await User.create({
    //   username: "spencer69",
    // })

    await Promise.all(
      users.map((user) => {
        return User.create(user)
      })
    )
    await Promise.all(
      profiles.map((profile) => {
        return Profile.create(profile)
      })
    )
     await Promise.all(
       messages.map((message) => {
         return Message.create(message)
       })
     )
    const user1 = await User.create({
      username: "stanco",
      email: "meatwad@gmail.com",
      password: "stanco_pw",
    })

      const user2 = await User.create({
        username: "Crazy Steve",
        email: "steve@gmail.com",
        password: "steve_pw",
      })

     const user3 = await User.create({
       username: "Magic Bebra",
       email: "bebra@gmail.com",
       password: "bebra_pw",
     })


    const profile1 = await Profile.create({
      bio: "loyal, 6'3, italian",
      age: 24,
      interests: "DD/cargo shorts/ deadlifting/ mayonnaise",
      gold: false,
    })

       const profile2 = await Profile.create({
         bio: "up to no good ",
         age: 24,
         interests: "spongebob",
         gold: false,
       })

       const message1 = await Message.create({
         info: "hey they brother",
         recepientId: 5,
       })

    await user1.setProfile(profile1)
    await user2.setProfile(profile2)
    await user1.setMessages(message1)
    await user1.setMatch(user2)
    // await user1.setMatch(user3)
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
