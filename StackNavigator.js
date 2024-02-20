import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import PizzaScreen from './screens/PizzaScreen';
import Beva from './screens/Beva';
import NonVeg from './screens/NonVeg';
import Cart from './components/Cart';
import OrderS from './components/OrderS';




const StackNavigator = () => {
    const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Pizza" component={PizzaScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Beva' component={Beva} options={{headerShown:false}}/>
        <Stack.Screen name='NonVeg' component={NonVeg} options={{headerShown:false}}/>
        <Stack.Screen name='Cart' component={Cart} options={{headerShown:false}}/>
        <Stack.Screen name='Order' component={OrderS} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator

const styles = StyleSheet.create({})