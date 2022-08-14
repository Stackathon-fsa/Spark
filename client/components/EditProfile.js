import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, Image, SafeAreaView, TextInput } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { editProfile } from '../redux/userProfile'

export default function EditProfile({route, navigation}) {
  const dispatch = useDispatch()
  const profile = route.params.profile
  const [bio, setBio] = useState(profile.bio);
  const [interests, setInterests] = useState(profile.interests)
  const [age, setAge] = useState(profile.age)
  const [name, setName] = useState(profile.name)

  const handleSubmit = () => {
    dispatch(editProfile({
      id: profile.userId,
      age,
      bio,
      interests,
      name
    }))
    navigation.navigate({
      name: "Profile",
      params: {id: profile.userId}
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit your profile!</Text>
      <SafeAreaView>
      <Text style={styles.label}>Name</Text>
      <TextInput
          style={styles.formInput}
          placeholder='set your name!'
          textContentType="none"
          onChangeText={setName}
          value={name}
          multiline={true}
        />
      <Text style={styles.label}>Age</Text>
      <TextInput
          style={styles.formInput}
          placeholder='set your age!'
          textContentType="none"
          onChangeText={setAge}
          value={`${age}`}
          multiline={true}
        />
        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={styles.formInput}
          placeholder='set your bio!'
          textContentType="none"
          onChangeText={setBio}
          value={bio}
          multiline={true}
        />
        <Text style={styles.label}>Interests</Text>
        <TextInput
          style={styles.formInput}
          placeholder='set your interests!'
          textContentType="none"
          onChangeText={setInterests}
          value={interests}
          multiline={true}
        />
        <Button title='Submit' onPress={handleSubmit} />
      </SafeAreaView>
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
  formInput: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 10,
    height: 60,
    margin: 8,
  },
  title: {
    position: "absolute",
    top: 30,
    fontWeight: "bold",
    fontSize: 20
  },
  label: {
    fontWeight: "bold",
    fontSize: 15
  }

})
