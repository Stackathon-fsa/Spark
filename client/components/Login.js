import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { authenticate } from '../redux/auth'
import {View, Text, SafeAreaView, TextInput, Button} from 'react-native'
// import { NativeScreenNavigationContainer } from 'react-native-screens';

function Login({navigation}) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formName = "login";
    dispatch(authenticate({username, password, formName}));
  }

  return (
    <SafeAreaView>
      <Text>Login in with your username and password!</Text>
      <TextInput
        placeholder='username'
        textContentType='username'
        onChangeText={setUsername}
      />
      <TextInput
      placeholder='password'
        textContentType='password'
        onChangeText={setPassword}
      />
      <Button title='Login' onPress={handleSubmit}>Log in</Button>
      <Text>Don't have an account...?</Text>
      <Button title='Signup' onPress={() => navigation.navigate('Signup')} />

    </SafeAreaView>
  )
}

export default Login;
