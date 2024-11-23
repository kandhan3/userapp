import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { deviceWidth } from './Dimens'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Line = () => {
    return (
        <View>
            <View style={{ borderTopWidth: 1, width: deviceWidth(100), marginHorizontal: -20, borderColor: Colors.border }}></View>
        </View>
    )
}

export default Line

const styles = StyleSheet.create({})