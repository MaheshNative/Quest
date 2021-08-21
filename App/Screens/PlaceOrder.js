import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Mobiles from "../Components/Mobiles";


class PlaceOrder extends React.Component {
    render() {

        return (
            <View style={{ backgroundColor: 'white', height: hp('100%') }}>

                <Image
                    style={{ height: 150, width: 150,alignSelf:'center', margin:50 }}
                    source={require("../Assets/satisfied.png")}
                />
                <Text style={{ fontWeight: 'bold',color:'#02ADD7', fontSize: 20, textAlign:'center'}}>Congratulations! Your Order Placed Successfully</Text>
                <View style={Styles.card}>
                    <Image
                        style={{ height: 150, width: 150, }}
                        source={require("../Assets/ip.jpg")}
                    />
                    <View style={{ marginTop:40 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign:'center'}}>IPhone 12 Pro</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' , textAlign:'center'}}>6 Gb  128 GB</Text>
                        {/* <Text style={{ fontSize: 15, color: 'red' }}>6 in stock</Text> */}

                        {/* <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Offer Price: 69.999$</Text> */}

                    </View>

                </View>

                <TouchableOpacity style={Styles.touch}
                onPress={() => this.props.navigation.navigate("Home")}
                >
                    <Text style={{ marginVertical: 8, fontSize: 15, fontWeight: 'bold', color: 'white' }}>View All Orders</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default PlaceOrder;


const Styles = StyleSheet.create({
    head: {
        fontSize: 15, marginVertical: 15, fontWeight: 'bold', marginTop: 30
    }, tt: {
        flexDirection: 'row'
        , height: hp('4.5%'), backgroundColor: 'white', width: wp('90%'),
        borderRadius: 5, alignSelf: 'center'
    },
    card: {
        height: hp('20%'),
        flexDirection: 'row',
        width: wp('90%'), marginTop: hp('5%'), elevation: 5, backgroundColor: 'white', alignSelf: 'center'
    },
    touch: {
        height: hp('5%'), alignItems: 'center', marginVertical: hp('10%'),
        width: wp('50%'), borderRadius: 7, alignSelf: 'center', backgroundColor: '#12ACD9'
    }
});
