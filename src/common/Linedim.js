import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {deviceWidth} from './Dimens';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Linedim = () => {
  return (
    <View>
      <View
        style={{
          borderTopWidth: 1,

          borderColor: Colors.border,
        }}></View>
    </View>
  );
};

export default Linedim;

const styles = StyleSheet.create({});
