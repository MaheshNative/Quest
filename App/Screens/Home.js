import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Mobiles from "../Components/Mobiles";


class Home extends React.Component {
    render() {

        return (
            <View style={{ backgroundColor: 'white', height: hp('100%'), paddingBottom: 60 }}>

                <View style={{ backgroundColor: '#99ccff', height: hp('15%'), }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ height: 50, width: 50, margin: 10 }}
                            source={require("../Assets/huawei.png")}
                        />
                        <Text style={Styles.head}>WelCome Mahesh!!</Text>
                        <TouchableOpacity

                            onPress={() => this.props.navigation.navigate("Notification")}
                        >
                            <Image
                                style={{ height: 30, width: 30, margin: 10, top: 10, marginLeft: hp('12%') }}
                                source={require("../Assets/notification.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Cart")}
                        >
                            <Image
                                style={{ height: 30, width: 30, margin: 10, top: 10 }}
                                source={require("../Assets/shopping-cart.png")}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={Styles.tt}>
                        <Image
                            style={{ width: 15, height: 15, top: 12, marginLeft: 15 }}
                            source={require('../Assets/search.png')}
                        />
                        <TextInput placeholder={'search...'} style={{ marginLeft: 10 }}></TextInput>
                    </View>
                </View>
               
                <ScrollView>

               
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Mobiles")}
                        style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/user-interface.png")}
                        />
                        <Text style={Styles.t1}>Mobiles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                     onPress={() => this.props.navigation.navigate("Electronics")}
                    style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/desktop.png")}
                        />
                        <Text style={Styles.t1}>Electronics</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <TouchableOpacity style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/smartwatch.png")}
                        />
                        <Text style={Styles.t1}>Watches</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/customer.png")}
                        />
                        <Text style={Styles.t1}>Dresses</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <TouchableOpacity style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/smartwatch.png")}
                        />
                        <Text style={Styles.t1}>Watches</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/customer.png")}
                        />
                        <Text style={Styles.t1}>Dresses</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <TouchableOpacity style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/smartwatch.png")}
                        />
                        <Text style={Styles.t1}>Watches</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.card}>
                        <Image
                            style={Styles.img}
                            source={require("../Assets/customer.png")}
                        />
                        <Text style={Styles.t1}>Dresses</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>




            </View>
        )
    }
}

export default Home;


const Styles = StyleSheet.create({
    head: {
        fontSize: 15, marginVertical: 15, fontWeight: 'bold', marginTop: 30
    }, tt: {
        flexDirection: 'row'
        , height: hp('4.5%'), backgroundColor: 'white', width: wp('90%'),
        borderRadius: 5, alignSelf: 'center'
    },
    card: {
        height: hp('20%'), paddingTop: 30, width: wp('40%'), margin: 10, borderRadius: 5, elevation: 10, backgroundColor: 'white'
    },
    t1: {
        fontSize: 16, fontWeight: 'bold', color: '#343434', textAlign: 'center',
    }, img: {
        height: 50, width: 50, margin: 10, alignSelf: 'center'
    }
});
