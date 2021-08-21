import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


class Mobiles extends React.Component {
    render() {

        return (
            <View style={{}}>

                <ScrollView>
                    <View
                        style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/ip.jpg")}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={Styles.t1}>Iphone 12 Pro</Text>
                            <Text style={Styles.t2}>6Gb 128 Gb</Text>
                            <Text style={Styles.t2}>79999$</Text>
                            <Text style={Styles.t2}>6 in stock</Text>
                            <TouchableOpacity style={Styles.touch}
                                onPress={() => this.props.navigation.navigate("Cart")}>
                                <Text style={{ marginVertical: 8, fontSize: 15, fontWeight: 'bold', color: 'white' }}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/ip.jpg")}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={Styles.t1}>Samsung  S20 Pro</Text>
                            <Text style={Styles.t2}>6Gb 128 Gb</Text>
                            <Text style={Styles.t2}>79999$</Text>
                            <Text style={Styles.t2}>6 in stock</Text>
                            <TouchableOpacity style={Styles.touch}
                                onPress={() => this.props.navigation.navigate("Cart")}>
                                <Text style={{ marginVertical: 8, fontSize: 15, fontWeight: 'bold', color: 'white' }}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/ip.jpg")}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={Styles.t1}>Asus Zenfone</Text>
                            <Text style={Styles.t2}>4Gb 128 Gb</Text>
                            <Text style={Styles.t2}>12999$</Text>
                            <Text style={Styles.t2}>6 in stock</Text>
                            <TouchableOpacity style={Styles.touch}
                                onPress={() => this.props.navigation.navigate("Cart")}>
                                <Text style={{ marginVertical: 8, fontSize: 15, fontWeight: 'bold', color: 'white' }}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/ip.jpg")}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={Styles.t1}>LG Nexus</Text>
                            <Text style={Styles.t2}>6Gb 64 Gb</Text>
                            <Text style={Styles.t2}>79999$</Text>
                            <Text style={Styles.t2}>6 in stock</Text>
                            <TouchableOpacity style={Styles.touch}
                                onPress={() => this.props.navigation.navigate("Cart")}>
                                <Text style={{ marginVertical: 8, fontSize: 15, fontWeight: 'bold', color: 'white' }}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/ip.jpg")}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={Styles.t1}>Iphone 12 Pro</Text>
                            <Text style={Styles.t2}>6Gb 128 Gb</Text>
                            <Text style={Styles.t2}>79999$</Text>
                            <Text style={Styles.t2}>6 in stock</Text>
                            <TouchableOpacity style={Styles.touch}
                                onPress={() => this.props.navigation.navigate("Cart")}>
                                <Text style={{ marginVertical: 8, fontSize: 15, fontWeight: 'bold', color: 'white' }}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>





            </View>
        )
    }
}

export default Mobiles;


const Styles = StyleSheet.create({
    card: {
        height: hp('22%'), width: wp('90%'), margin: 10,
        borderRadius: 5, elevation: 10, backgroundColor: 'white', flexDirection: 'row'
    },
    t1: {
        fontSize: 16, fontWeight: 'bold', color: '#343434', textAlign: 'center', marginTop: 15
    }, img: {
        height: 150, width: 150, alignSelf: 'center'
    },
    t2: {
        fontSize: 16, color: 'green', textAlign: 'center', marginTop: 5
    },
    touch: {
        height: hp('4.5%'), alignItems: 'center', marginTop: 10,
        width: wp('40%'), borderRadius: 7, alignSelf: 'center', backgroundColor: '#12ACD9'
    }
});
