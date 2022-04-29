import React from 'react'
import { Text, Button, View } from 'react-native'

export default function Home({navigation}) {
  return (
    <View>
      <Text>
        This is the homepage
      </Text>
      <Button title='Go to Profile' onPress={() => navigation.navigate('Profile', {
        name: 'bek'
      })} />
    </View>
  )
}
