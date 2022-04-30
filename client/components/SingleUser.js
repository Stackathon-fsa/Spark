
import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../redux/user"

export default function SingleUser({ navigation }) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

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
