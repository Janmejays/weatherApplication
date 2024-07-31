import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
//import GetLocation from 'react-native-get-location'

const onPressLocation = () => {

}
const CurrentWeather = () => {
    return (
        <View>
            <TouchableOpacity
                onPress={onPressLocation}
                styles={{ fontSize: 20 }}>
                <Text >Location</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CurrentWeather

const styles = StyleSheet.create({
    titles: {
        flex: 1,
        fontWeight: "bold",
        fontSize: 10,
        color: "red",
        marginBottom: 40,
    }
})