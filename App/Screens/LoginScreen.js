import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


class LoginScreen extends React.Component {
    render() {

        return (
            <View style={{backgroundColor:'#ffe6e6', height:hp('100%')}}>

                <View style={{alignSelf:'center'}}>
                    <Image
                        style={{ height: 100, width: 100,margin:hp('10%')}}
                        source={require("../Assets/huawei.png")}
                    />
                </View>
                <View style={{ marginHorizontal: 30 }}>
                    <Text style={{ fontSize: 20, marginVertical: 10, color: '#707070', fontWeight: 'bold' }}>UserName</Text>
                    <View style={Styles.v1}>
                        <TextInput placeholderTextColor='#70707069'
                            style={{ fontWeight: 'bold' }}
                            placeholder={'Enter Username'} />
                    </View>
                </View>
                <View style={{ marginHorizontal: 30 }}>
                    <Text style={{ fontSize: 20, marginVertical: 10, color: '#707070', fontWeight: 'bold' }}>Password</Text>
                    <View style={Styles.v1}>
                        <TextInput placeholderTextColor='#70707069'
                            style={{ fontWeight: 'bold' }}
                            placeholder={'Enter Password'} />
                    </View>
                </View>

                <TouchableOpacity style={Styles.touch}
                    onPress={() => this.props.navigation.navigate("Home")}>
                    <Text style={{ marginVertical: 8, fontSize: 15, fontWeight: 'bold', color: 'white' }}>Login</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

export default LoginScreen;


const Styles = StyleSheet.create({
    v1: {
        height: hp('5%'), borderWidth: 0, borderRadius: 5, borderColor: '#00000029', paddingLeft: 15,
        elevation: 5, backgroundColor: 'white'
    }, touch: {
        height: hp('5%'), alignItems: 'center', marginVertical: hp('10%'),
        width: wp('50%'), borderRadius: 7, alignSelf: 'center', backgroundColor: '#12ACD9'
    }
});
