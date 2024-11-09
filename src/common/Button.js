import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styling } from './Styling'

const Button = ({text}) => {
  return (
    <View style={{backgroundColor:'#070F2F',borderRadius:25}}>
      <Text style={{color:'white',textAlign:'center',padding:15,}}>{text}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})