import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Mobiles from "../Components/Mobiles";


class Notification extends React.Component {
    render() {

        return (
            <View style={{ backgroundColor: 'white', height: hp('100%')}}>

              <Text style={{fontSize:25, fontWeight:'bold', marginTop:hp('30%'),
              textAlign:'center'}}>No New Notifications</Text>


            </View>
        )
    }
}

export default Notification;


const Styles = StyleSheet.create({
    head: {
        fontSize: 15, marginVertical: 15, fontWeight: 'bold', marginTop: 30
    }, tt: {
        flexDirection: 'row'
        , height: hp('4.5%'), backgroundColor: 'white', width: wp('90%'),
        borderRadius: 5, alignSelf: 'center'
    },
});
