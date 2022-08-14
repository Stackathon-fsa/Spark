import { logout } from "../redux/auth"
import React, { useEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
  TouchableHighlight,
} from "react-native"
import { fetchAllProfiles, addMatch } from "../redux/home"
import { useDispatch, useSelector } from "react-redux"

export default function Home({ navigation }) {
  const dispatch = useDispatch()
  const { profiles } = useSelector((state) => state.allProfiles)
  const { user } = useSelector((state) => state.auth)

  // added inside useEffect not sure where initial axios error is coming from -> /api/profiles/undefined
  useEffect(() => {
    if (user) {
      dispatch(fetchAllProfiles(user.id))
    }
  }, [user])

  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  function swipe(userId, matchId, like) {
    dispatch(addMatch({
      userId,
      matchId,
      like
    }))
  }

  let picRender = false
  let rando
  let randomNum
  let buttonRender = true
  let name
  let interests
  let bio
  if (profiles && profiles.length !== 0) {
    randomNum = getRandomInt(profiles.length);
    rando = profiles[randomNum].imageUrl;
    bio = profiles[randomNum].bio;
    interests = profiles[randomNum].interests;
    picRender = true;
  }

  if (profiles && profiles.length === 0) {
    buttonRender = false;
  }

  return (
    <View style={styles.container}>
       <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#232122" : "#FFFFFF",
              position: "absolute",
              left: 15,
              top: 10
            },
            styles.profileAndLogout,
          ]}
          onPress={() =>
            navigation.navigate({
              name: "Profile",
              params: { id: user.id },
            })
          }
        >
        <Text style={styles.emoji}>🧑</Text>
      </Pressable>

      <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#232122" : "#A5828C",
              position: "absolute",
              right: 15,
              top: 10
            },
            styles.profileAndLogout,
          ]}
          onPress={() => dispatch(logout())}
        >
          <Text style={styles.emoji}>🚪</Text>
      </Pressable>

      <View style={styles.header}>
        <Text style={styles.heading}>ꜱᴘᴀʀᴋ⚡</Text>
      </View>

      {picRender ? (
        <React.Fragment>
          <View style={styles.container_details}>
            <Text style={styles.details}>{bio}</Text>
            <Text style={styles.details}>{interests}</Text>
          </View>
          <Image
            source={{
              uri: rando,
            }}
            style={{ width: 280, height: 320, borderRadius: 40 }}
          />
        </React.Fragment>


      ) : (
        <Text>SEND US BITCOIN</Text>
      )}

      {buttonRender ? (
        <View>
          <View style={styles.container_button}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#dddddd" : "#26EC7D",
                },
                styles.like_button,
              ]}
              onPress={() => swipe(user.id, profiles[randomNum].id, true)}
            >
              <Text style={styles.text}>❤</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#dddddd" : "#A40F3A",
                },
                styles.dislike_button,
              ]}
              onPress={() => swipe(user.id, profiles[randomNum].id, false)}
            >
              <Text style={styles.text}>❌</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <Text>NEED MORE STARTUP FUNDING, RAN OUT OF DATA</Text>
      )}

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
  bottom: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    height: 100,
    width: "100%",
    position: "absolute",
    bottom: 0
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
     alignContent: "space-between",
    position: "absolute",
    top: 15
  },
  container_button: {
    backgroundColor: "#FD3A73",
    flexDirection: "row",
    marginTop: 20,
  },
  container_logout: {
    backgroundColor: "#FD3A73",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginBottom: 10,
  },
  container_details: {
    backgroundColor: "#FD3A73",
    marginBottom: 40,
  },
  main_pic: {
    borderRadius: 10,
  },
  like_button: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 1,
    marginRight: 110,
  },
  dislike_button: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 0,
  },
  text: {
    fontSize: 10,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  details: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    margin: 2,
    fontFamily: "Verdana",
    textAlign: "center"
  },
  touchDown: {
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  heading: {
    fontSize: 24,
    // lineHeight: 21,
    fontWeight: "bold",
    // letterSpacing: 0.25,
    color: "white",
    // marginBottom: 40,
    // position: "absolute",
    // top: 20
  },
  logout: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 100,
    elevation: 3,
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 70,
  },

  profile: {
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 100,
    elevation: 3,
    borderColor: "black",
    borderWidth: 1,
    marginRight: 10,
  },
  profileAndLogout: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
  },
  emoji: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
})
