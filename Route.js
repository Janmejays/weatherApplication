import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/screens/Login'
import CurrentWeather from './src/screens/Detail'
import Forecast from './src/screens/Listing'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Root = createNativeStackNavigator()


const Route = () => {
  return (
    <NavigationContainer>
      <Root.Navigator >
        <Root.Screen name="Login" component={Login} />
        <Root.Screen name="CurrentWeather" component={CurrentWeather} />
        <Root.Screen name="Forecast" component={Forecast} />
      </Root.Navigator>
    </NavigationContainer>
  )
}

export default Route

const styles = StyleSheet.create({})