import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import SingleUser from "./components/SingleUser"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store";
// import {creatStackNavigator} from 'react-navigation'

const Stack = createNativeStackNavigator()

export default function App({ navigation }) {
  return (
    //     <View style={styles.container}>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Stack.Screen name="SingleUser" component={SingleUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="SingleUser"
    //     onPress={() => navigation.navigate("SingleUser")}
    //   />
    // </View>

    //       <Text>Open up App.js to start working on your app! Hello World!</Text>
    //       <StatusBar style="auto" />
    //     </View>
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
