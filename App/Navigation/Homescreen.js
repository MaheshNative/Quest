
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginScreen from '../Screens/LoginScreen'
import SignUp from '../Screens/SignUp'
import Home from '../Screens/Home';
import Mobiles from '../Components/Mobiles';
import Notification from '../Screens/Notification';
import Cart from '../Screens/Cart';
import PlaceOrder from '../Screens/PlaceOrder';
import Electronics from '../Components/Electronics';



const HomeStack = createStackNavigator();

function Homescreen() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >
            <HomeStack.Screen name={'LoginScreen'} component={LoginScreen} />
            <HomeStack.Screen name={'SignUp'} component={SignUp} />
            <HomeStack.Screen name={'Home'} component={Home} />
            <HomeStack.Screen name={'Notification'} component={Notification} />
            <HomeStack.Screen name={'Cart'} component={Cart} />
            <HomeStack.Screen name={'PlaceOrder'} component={PlaceOrder} />
            <HomeStack.Screen name={'Electronics'} component={Electronics} />
            <HomeStack.Screen name={'Mobiles'} component={Mobiles} />


        </HomeStack.Navigator>

    );
}


export default Homescreen;