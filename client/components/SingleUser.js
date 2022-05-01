import React, {useEffect} from "react"
import { StyleSheet, Text, View, Button, Image } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../redux/user"
import { fetchProfile} from "../redux/userProfile"

export default function SingleUser({ navigation, route }) {
  const dispatch = useDispatch()
  // const user = useSelector((state) => state.user)
  const {profile} = useSelector(state => state.profile)
  console.log('id is', route.params.id)
  const userId = route.params.id

  useEffect(() => {
    // dispatch(fetchProfile(route.params.id))
    dispatch(fetchProfile(userId))
  }, [])

  // console.log(profile)

  return (
    // <View style={styles.container}>
    //   <Text>PROFILE INFORMATION HERE!</Text>
    // </View>
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text>PROFILE INFORMATION HERE!</Text>
    //   <Button title="Home" onPress={() => navigation.navigate("Home")} />
    //   <Button title="fetchUser" onPress={() => dispatch(fetchUser())} />
    // </View>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}} >
        {/* <Text>Profile Pic</Text> */}
        <View style={styles.top}>
          <Image
          source={{ uri: profile.imageUrl }}
          style={{width: 150, height: 150, borderRadius: 100}}
          />
          <Text style={{marginLeft: 23}}>First name, {profile.age}</Text>
        </View>
        <Text style={{fontWeight: "bold"}}>Bio</Text>
        <Text>{profile.bio}</Text>
        <Text style={{marginTop: 15, fontWeight: "bold"}}>Interests</Text>
        <Text>{profile.interests}</Text>
        <Button
          title="Edit Profile"
          style={{marginTop: 100,}}
          color="#841584"
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    position: "absolute",
    top: 20,
    textAlign: "center",
  },

})
