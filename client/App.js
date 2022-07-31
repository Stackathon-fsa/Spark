import { StatusBar } from "expo-status-bar"
import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { StyleSheet, Text, View, Button } from "react-native"
import SingleUser from "./components/SingleUser"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./components/Home";
import { me } from "./redux/auth";
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import EditProfile from "./components/EditProfile"

const Stack = createNativeStackNavigator()

export default function App ({ navigation }) {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
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
          <Stack.Screen name="EditProfile" component={EditProfile} />
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
