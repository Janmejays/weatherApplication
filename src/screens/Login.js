import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

const Screens1 = ({ navigation }) => {

    const [title, settitle] = useState('Weather Application')

    const onPressLogin = () => {
        navigation.navigate('Screen2')
    };
    const onPressForgotPassword = () => {
        // Do something about forgot password operation
    };
    const onPressSignUp = () => {
        // Do something about signup operation
    };
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <ImageBackground
            source={{ uri: 'https://media.istockphoto.com/id/1569184497/photo/super-typhoon-tropical-storm-cyclone-hurricane-tornado-over-ocean-weather-background-typhoon.jpg?s=1024x1024&w=is&k=20&c=llYsq78xw5J5OGV90uh_afPJ2VnOEBRVVpiu9vwkq_Q=' }} // Replace with your image URL or local image path
            style={styles.background}
        >
            <View style={styles.overlay}>
                <Text style={styles.title}> {title}</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        value={email}
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setEmail(text)} />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry
                        value={password}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setPassword(text)} />
                </View>
                <TouchableOpacity
                    onPress={onPressForgotPassword}>
                    <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPressLogin}
                    style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPressSignUp}>
                    <Text style={styles.forgotAndSignUpText}>Signup</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // Optional: how the image should be resized to fit the screen
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: darken the background image
    },
    title: {
        fontWeight: "bold",
        fontSize: 40,
        color: "white",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#3AB4BA",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "blue"
    },
    forgotAndSignUpText: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
});
export default Screens1;
