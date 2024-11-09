import { StyleSheet, Image, View, StatusBar, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styling } from '../common/Styling';
import { deviceHeight, deviceWidth } from '../common/Dimens';
import { Fonts } from '../common/Fonts';
import Button from '../common/Button';

const Intro1 = ({ navigation }) => {

    return (
        <View style={styling.container}>
            <View style={styles.imb1}>
                <StatusBar hidden={false}></StatusBar>
                <View style={{ rowGap: 10 }}>
                    <Image resizeMode='contain' style={{width:deviceWidth(60),height:deviceHeight(30)}} source={require('../../assets/images/Location.png')}></Image>
                    <Text style={[styling.texthead,{textAlign:'center'}]}>Allow Location Access</Text>
                    <Text style={[styling.textsub1,{textAlign:'center'}]}>Enable Location in your Device for better Experience. Turn on your Precise Location Permission.</Text>
                </View>
            </View>
            <TouchableOpacity style={{bottom:20,paddingHorizontal:20}} onPress={() => navigation.navigate('register')}>
                <Button text={'Enable Location'}></Button>
            </TouchableOpacity>
        </View>
    )
}

export default Intro1

const styles = StyleSheet.create({
    imb1: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
        width: deviceWidth(100),
        padding: 20
    },
})