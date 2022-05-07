import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { authenticate } from '../redux/auth'
import {View, Text, SafeAreaView, TextInput, Button, StyleSheet} from 'react-native'
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
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.formInput}
        placeholder='username'
        textContentType='username'
        onChangeText={setUsername}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.formInput}
        placeholder='password'
        textContentType='password'
        onChangeText={setPassword}
        autoCapitalize='none'
        secureTextEntry={true}
      />
      <Button color='white' borderRadius={10} title='Log in' onPress={handleSubmit}>Log in</Button>
      <Text style={styles.text}>Don't have an account?</Text>
      <Button color='white' title='Sign up' onPress={() => navigation.navigate('Signup')} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'linear-gradient(#FD297B, #FF5864, #FF655B)',
    backgroundColor: '#FD3A73',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    marginTop: 30,
  },
  formInput: {
    backgroundColor: 'white',
    width: '55%',
    borderRadius: 25,
    height: 30,
    textAlign: 'center',
    margin: 8,
  },
  // button: {
  //   borderRadius: 10,
  //   color: 'white',
  //   backgroundColor: 'white',
  // }
})

export default Login;
