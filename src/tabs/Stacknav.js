import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
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
import ReviewBooking from '../localrides/ReviewBooking';
import BookingHistoryOne from '../localrides/BookingHistoryOne';
import BookingHistoryTwo from '../localrides/BookingHistoryTwo';
import BookingHistoryThree from '../localrides/BookingHistoryThree';
import BookingHistoryFour from '../localrides/BookingHistoryFour';
import BookingHistoryFive from '../localrides/BookingHistoryFive';
import Completed from '../localrides/Completed';
const Stack = createStackNavigator();

const Stacknav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Home'
    >
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
      <Stack.Screen name="ReviewBooking" component={ReviewBooking} />
      <Stack.Screen name="BookingHistoryOne" component={BookingHistoryOne} />
      <Stack.Screen name="BookingHistoryTwo" component={BookingHistoryTwo} />
      <Stack.Screen name="BookingHistoryThree" component={BookingHistoryThree} />
      <Stack.Screen name="BookingHistoryFour" component={BookingHistoryFour} />
      <Stack.Screen name="BookingHistoryFive" component={BookingHistoryFive} />
      <Stack.Screen name="Completed" component={Completed} />







    </Stack.Navigator>
  );
};

export default Stacknav;

const styles = StyleSheet.create({});
