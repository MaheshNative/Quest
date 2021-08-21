import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './App/Navigation/Homescreen'
import Mobiles from './App/Components/Mobiles';

export default function App() {
  return (

    <NavigationContainer>
      <Homescreen />
    </NavigationContainer>

  );
}
