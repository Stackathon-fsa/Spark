import React from 'react'
import { Text, Button, View } from 'react-native'

export default function Profile({navigation, route}) {
  const {name} = route.params;
  return (
    <View>
      <Text>Hello, {name}</Text>
      <Button title='Back to Home' onPress={() => navigation.goBack()} />
    </View>
  )
}
