import { logout } from "../redux/auth"
import React, { useEffect } from "react"
import { StyleSheet, Text, View, Button, Image, Pressable, TouchableHighlight } from "react-native"
import { fetchAllProfiles, addMatch } from "../redux/home"
import { useDispatch, useSelector } from "react-redux"
import funPic from "../../public/gary.PNG"

//why is this component rendering on the login page ?
//is that normally how react works?

export default function Home({ navigation }) {
  const dispatch = useDispatch()
  const allProfiles = useSelector((state) => state.allProfiles)

  const auth = useSelector((state) => state.auth)

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(fetchAllProfiles(auth.user.id))
  }, [])

  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  let picRender = false
  let rando
  let randomNum
  let buttonRender = true;
  console.log('ALL PROFILES', allProfiles.profiles)
  if (allProfiles.profiles && allProfiles.profiles.length !== 0) {
    randomNum = getRandomInt(allProfiles.profiles.length);
    rando =
      allProfiles.profiles[randomNum].imageUrl
    console.log('RANDOM PROFILE', allProfiles.profiles[randomNum])
    console.log("RANDOM NUMBERRRRR", randomNum)
    picRender = true
  }

  if (allProfiles.profiles && allProfiles.profiles.length === 0) {
    buttonRender = false
  }
  console.log(buttonRender)
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>ꜱᴘᴀʀᴋ⚡</Text>
        {picRender ? (
          <Image
            source={{
              uri: rando,
            }}
            style={{ width: 500, height: 600 }}
          />
        ) : (
          // <Image
          //   source={{
          //     uri: "https://64.media.tumblr.com/84365fe19039b5fd917d6d449ca86290/tumblr_op4lb5DPRe1qg6rkio1_1280.jpg",
          //   }}
          //   style={{ width: 100, height: 100 }}
          // />
          <Text>NEED MORE STARTUP FUNDING, RAN OUT OF DATA</Text>
        )}

        <Button
          title="SingleUser"
          // onPress={() => navigation.navigate("SingleUser")}
          onPress={() =>
            navigation.navigate({
              name: "SingleUser",
              params: { id: user.id },
            })
          }
        />
        <Button title="Logout" onPress={() => dispatch(logout())}>
          Logout
        </Button>
        {buttonRender ? (
          <View>
            <Button
              title="Like!"
              onPress={() =>
                dispatch(
                  addMatch({
                    userId: auth.user.id,
                    matchId: allProfiles.profiles[randomNum].id,
                    like: "yes",
                  })
                )
              }
            />
            <Button
              style={{ width: 150, height: 150, borderRadius: 100 }}
              color="green"
              title="No!"
              onPress={() =>
                dispatch(
                  addMatch({
                    userId: auth.user.id,
                    matchId: allProfiles.profiles[randomNum].id,
                    like: "no",
                  })
                )
              }
            />
            {/* <TouchableHighlight activeOpacity={0.6} underlayColor="#000000">
              <View> */}
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#dddddd" : "#26EC7D",
                },
                styles.like_button,
              ]}
              onPress={() =>
                dispatch(
                  addMatch({
                    userId: auth.user.id,
                    matchId: allProfiles.profiles[randomNum].id,
                    like: "no",
                  })
                )
              }
            >
              <Text style={styles.text}>❤</Text>
            </Pressable>
            {/* </View>
            </TouchableHighlight> */}
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#dddddd" : "#A40F3A",
                },
                styles.dislike_button,
              ]}
              onPress={() =>
                dispatch(
                  addMatch({
                    userId: auth.user.id,
                    matchId: allProfiles.profiles[randomNum].id,
                    like: "no",
                  })
                )
              }
            >
              <Text style={styles.text}>❌</Text>
            </Pressable>
          </View>
        ) : (
          <Text>NEED MORE STARTUP FUNDING, RAN OUT OF DATA</Text>
          // <Image
          //   source={{
          //     uri: funPic,
          //   }}
          //   style={{ width: 1000, height: 700 }}
          // />
        )}

        {/* <Button
        title="fetchAllUser"
        onPress={() => dispatch(fetchAllProfiles())}
      /> */}
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FD3A73",
    alignItems: "center",
    justifyContent: "center",
  },
  // button: {
  //   borderRadius: 100,
  //   height: 20,
  //   width: 20,
  //   color: "purple",
  // },
  like_button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 1,
    borderRadius: 100,
    elevation: 3,
    // backgroundColor: "#26EC7D",
    borderColor: "white",
    borderWidth: 1,
  },
  dislike_button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 1,
    borderRadius: 100,
    elevation: 3,
    // backgroundColor: "#A40F3A",
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  touchDown: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  heading: {
    fontSize: 70,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    marginBottom: 40,
  },
})
