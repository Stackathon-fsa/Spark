import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"

export default function Home({ navigation }) {
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
