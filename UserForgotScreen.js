import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const UserForgotScreen = ({ navigation }) => {
    const onPressLogin = () => {
        navigation.navigate('UserLogIn')
    };
    const onPressSubmit = () => {
    };
    const [state, setState] = useState({
        email: '',
        cpassword: '',
    })
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Forgot Password</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="enter password"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({ password: text })} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="enter password again"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({ cpassword: text })} />
            </View>            
            <TouchableOpacity
                onPress={onPressSubmit}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Submit </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPressLogin}>
                <Text style={styles.forgotAndSignUpText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4FD3DA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
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
        color: "white"
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
export default UserForgotScreen;