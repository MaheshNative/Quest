import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, } from 'react-native';


class SignUp extends React.Component {
    render() {

        return (
            <View>
                <View style={{ marginVertical: 60 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#D92112', textAlign: 'center' }}>This is Sign-Up Screen</Text>
                </View>

                <TouchableOpacity style={{
                    height: 40, alignItems: 'center',
                    width: 180, borderRadius: 10, alignSelf: 'center', backgroundColor: '#12ACD9'
                }}
                    onPress={() => this.props.navigation.navigate("LoginScreen")}>
                    <Text style={{ marginVertical: 8, fontSize: 15, fontWeight: 'bold', color: 'white' }}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SignUp;



