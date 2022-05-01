import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../redux/auth'
import {View, Text, SafeAreaView, TextInput, Button, StyleSheet} from 'react-native'

export default function SignUp({navigation}) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formName = "signup";
    dispatch(register({username, email, password, formName}));
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Create a new account!</Text> */}
      <TextInput
        style={styles.formInput}
        placeholder='username'
        textContentType='username'
        onChangeText={setUsername}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.formInput}
        placeholder='email'
        textContentType='emailAddress'
        onChangeText={setEmail}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.formInput}
        placeholder='password'
        textContentType='password'
        onChangeText={setPassword}
        autoCapitalize='none'
      />
      <Button color='white' title='Create Account' onPress={handleSubmit} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FD3A73',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    margin: 10
  },
  formInput: {
    backgroundColor: 'white',
    width: '55%',
    borderRadius: 25,
    height: 30,
    textAlign: 'center',
    margin: 8
  },
  // button: {
  //   borderRadius: 10,
  //   color: 'white',
  //   backgroundColor: 'white'
  // }
})
