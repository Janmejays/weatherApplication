import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/screens/Login'
import CurrentWeather from './src/screens/CurrentWeather'
import Forecast from './src/screens/forecast'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Root = createNativeStackNavigator()


const Route = () => {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName='CurrentWeather' screenOptions={{ headerShown: false }}>
        <Root.Screen name="Login" component={Login} />
        <Root.Screen name="CurrentWeather" component={CurrentWeather} />
        <Root.Screen name="Forecast" component={Forecast} />
      </Root.Navigator>
    </NavigationContainer>
  )
}

export default Route

const styles = StyleSheet.create({})