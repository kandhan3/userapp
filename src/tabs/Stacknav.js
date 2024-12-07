import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Welcomepages/Splasj';
import Intro1 from '../Welcomepages/Intro1';
import Register from '../Welcomepages/Register';
import Otp from '../Welcomepages/Otp';
import Home from '../localrides/Home';
import Searchlocation from '../localrides/Searchlocation';
import Confirmride from '../localrides/Confirmride';
import Picktime from '../localrides/Picktime';
import Review from '../localrides/Review';
import Coupon from '../localrides/Coupon';
import Payment from '../localrides/Payment';
import Reviewbooking from '../localrides/Reviewbooking';
import Cancelride from '../localrides/Cancelride';
const Stack = createStackNavigator();

const Stacknav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="splash">
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="intro1" component={Intro1} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="otp" component={Otp} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="searchlocation" component={Searchlocation} />
      <Stack.Screen name="confirmride" component={Confirmride} />
      <Stack.Screen name="picktime" component={Picktime} />
      <Stack.Screen name="review" component={Review} />
      <Stack.Screen name="coupon" component={Coupon} />
      <Stack.Screen name="payment" component={Payment} />
      <Stack.Screen name="reviewbooking" component={Reviewbooking} />
      <Stack.Screen name="cancelride" component={Cancelride} />
    </Stack.Navigator>
  );
};

export default Stacknav;

const styles = StyleSheet.create({});
