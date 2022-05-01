
import React, {useEffect} from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../redux/user"
import { fetchProfile} from "../redux/userProfile"

export default function SingleUser({ navigation, route }) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const {profile} = useSelector(state => state.profile)

  useEffect(() => {
    // dispatch(fetchProfile(route.params.id))
    dispatch(fetchProfile(7))
  }, [])

  console.log(profile)

  return (
    // <View style={styles.container}>
    //   <Text>PROFILE INFORMATION HERE!</Text>
    // </View>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>PROFILE INFORMATION HERE!</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="fetchUser" onPress={() => dispatch(fetchUser())} />
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
})
