import { StatusBar } from "expo-status-bar"
import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { StyleSheet, Text, View, Button } from "react-native"
import SingleUser from "./components/SingleUser"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./components/Home";
// import { Provider } from "react-redux";
// import store from "./store";
import { me } from "./redux/auth";
import Login from "./components/Login"
import SignUp from "./components/SignUp"
// import {creatStackNavigator} from 'react-navigation'

const Stack = createNativeStackNavigator()

export default function App ({ navigation }) {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  console.log('user is', user)
  const isLoggedIn = !!user

  useEffect(() => {
    dispatch(me())
  }, [])

  return (
      <NavigationContainer>
        {isLoggedIn ?
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Stack.Screen name="SingleUser" component={SingleUser} />
        </Stack.Navigator>
        :
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name='Signup'
            component={SignUp}
            options={{title: "Signup"}}
          />
        </Stack.Navigator>
        }
      </NavigationContainer>
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

// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
//     // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
//     isLoggedIn: !!state.auth.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
// export default (connect(mapState, mapDispatch)(App))
