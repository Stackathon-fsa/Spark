import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../redux/auth'
import {View, Text, SafeAreaView, TextInput, Button} from 'react-native'

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
    <SafeAreaView>
      <Text>Create a new account!</Text>
      <TextInput
        placeholder='username'
        textContentType='username'
        onChangeText={setUsername}
      />
      <TextInput
        placeholder='email'
        textContentType='emailAddress'
        onChangeText={setEmail}
      />
      <TextInput
        placeholder='password'
        textContentType='password'
        onChangeText={setPassword}
      />
      <Button title='Signup' onPress={handleSubmit} />
    </SafeAreaView>
  )
}
