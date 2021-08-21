import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Mobiles from "../Components/Mobiles";
import PlaceOrder from "./PlaceOrder";

class Cart extends React.Component {
    render() {

        return (
            <View style={{ backgroundColor: 'white', height: hp('100%') }}>
                <View style={Styles.card}>
                    <Image
                        style={{ height: 150, width: 150, }}
                        source={require("../Assets/ip.jpg")}
                    />
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>IPhone 12 Pro</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>6Gb 128GB</Text>
                        <Text style={{ fontSize: 15, color: 'red' }}>6 in stock</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>MRP: 79.999$</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Offer Price: 69.999$</Text>

                    </View>

                </View>

                <TouchableOpacity style={Styles.touch}
                    onPress={() => this.props.navigation.navigate("PlaceOrder")}>
                    <Text style={{ marginVertical: 8, fontSize: 15, fontWeight: 'bold', color: 'white' }}>Proceed to Checkout</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default Cart;


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
        width: wp('90%'), marginTop: hp('10%'), elevation: 5, backgroundColor: 'white', alignSelf: 'center'
    },
    touch: {
        height: hp('5%'), alignItems: 'center', marginVertical: hp('10%'),
        width: wp('50%'), borderRadius: 7, alignSelf: 'center', backgroundColor: '#12ACD9'
    }
});
