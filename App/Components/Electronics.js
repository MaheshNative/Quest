import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


class Electronics extends React.Component {
    render() {

        return (
            <View style={{}}>

                <ScrollView>
                    <View
                        style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/desktop.png")}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={Styles.t1}>MI 32 inch Led TV</Text>
                            <Text style={Styles.t2}>1Gb 8Gb</Text>
                            <Text style={Styles.t2}>10999$</Text>
                            <Text style={Styles.t3}>1 in stock</Text>
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
                            source={require("../Assets/desktop.png")}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={Styles.t1}>MI 32 inch Led TV</Text>
                            <Text style={Styles.t2}>1Gb 8Gb</Text>
                            <Text style={Styles.t2}>10999$</Text>
                            <Text style={Styles.t3}>1 in stock</Text>
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
                            source={require("../Assets/desktop.png")}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={Styles.t1}>MI 32 inch Led TV</Text>
                            <Text style={Styles.t2}>1Gb 8Gb</Text>
                            <Text style={Styles.t2}>10999$</Text>
                            <Text style={Styles.t3}>1 in stock</Text>
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
                            source={require("../Assets/desktop.png")}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={Styles.t1}>MI 32 inch Led TV</Text>
                            <Text style={Styles.t2}>1Gb 8Gb</Text>
                            <Text style={Styles.t2}>10999$</Text>
                            <Text style={Styles.t3}>1 in stock</Text>
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
                            source={require("../Assets/desktop.png")}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={Styles.t1}>MI 32 inch Led TV</Text>
                            <Text style={Styles.t2}>1Gb 8Gb</Text>
                            <Text style={Styles.t2}>10999$</Text>
                            <Text style={Styles.t3}>1 in stock</Text>
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

export default Electronics;


const Styles = StyleSheet.create({
    card: {
        height: hp('22%'), width: wp('90%'), margin: 10,
        borderRadius: 5, elevation: 10, backgroundColor: 'white', flexDirection: 'row'
    },
    t1: {
        fontSize: 16, fontWeight: 'bold', color: '#343434', textAlign: 'center', marginTop: 15
    }, img: {
        height: 100, width: 100, alignSelf: 'center', marginHorizontal: 30
    },
    t2: {
        fontSize: 16, color: 'green', textAlign: 'center', marginTop: 5
    },
    t3: {
        fontSize: 16, color: 'red', textAlign: 'center', marginTop: 5
    },
    touch: {
        height: hp('4.5%'), alignItems: 'center', marginTop: 10,
        width: wp('40%'), borderRadius: 7, alignSelf: 'center', backgroundColor: '#12ACD9'
    }
});
