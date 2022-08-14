import React, {useEffect} from "react"
import { StyleSheet, Text, View, Button, Image } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../redux/user"
import { fetchProfile} from "../redux/userProfile"

export default function SingleUser({ navigation, route }) {
  const dispatch = useDispatch()
  const {profile} = useSelector(state => state.profile)
  const userId = route.params.id

  useEffect(() => {
    dispatch(fetchProfile(userId))
  }, [])

  return (
    <View style={styles.container}>
        <View style={styles.top}>
          <Image
          source={{ uri: profile.imageUrl }}
          style={{width: 150, height: 150, borderRadius: 100}}
          />
          {profile.name ? <Text style={{marginLeft: 40}}>{profile.name}, {profile.age}</Text> : null}
        </View>
        <Text style={{fontWeight: "bold"}}>Bio</Text>
        <Text>{profile.bio}</Text>
        <Text style={{marginTop: 15, fontWeight: "bold"}}>Interests</Text>
        <Text>{profile.interests}</Text>
        <View style={{position: "absolute", bottom: 30}}>
        <Button
          title="Edit Profile"
          style={{marginTop: 100,}}
          onPress={() => navigation.navigate({
            name: "Edit",
            params: {profile}
          })}
        />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFF0',
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    position: "absolute",
    top: 20,
    textAlign: "center",
  },
})
