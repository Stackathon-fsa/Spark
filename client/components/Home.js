import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { useDispatch } from "react-redux"
import { logout } from "../redux/auth"

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  return (
    // <View style={styles.container}>
    //   <Text>WELCOME HOME CARLY!</Text>
    // </View>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="SingleUser"
        onPress={() => navigation.navigate("SingleUser")}
      />
      <Button
        title="Logout"
        onPress={() => dispatch(logout())}
      >Logout</Button>
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
