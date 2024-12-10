import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styling } from '../common/Styling'
import { colors } from '../common/Colors'
import { deviceHeight, deviceWidth } from '../common/Dimens'
import { Fonts } from '../common/Fonts'
import { Images } from '../common/Images'
import Button from '../common/Button'
import { useNavigation } from '@react-navigation/native'

const BookingHistoryTwo = () => {
    const navigation = useNavigation()
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styling.container}>
                <TouchableOpacity onPress={(() => navigation.navigate('home'))} style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                    <Image source={Images.back}></Image>
                </TouchableOpacity>
                <View style={{ margin: 20 }}>
                    <Text style={styling.texthead}>Karthick</Text>
                    <Text style={{ color: colors.text, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmmedium, lineHeight: 20, }}>+91 - 88077 48314</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('editprofile')}>
                    <Text style={{ color: '#0883FE', fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmsemibold, paddingHorizontal: deviceWidth(5), marginBottom: deviceHeight(3) }}>Edit Profile</Text>
                </TouchableOpacity>
                <Image style={{ width: deviceWidth(99), height: deviceHeight(0.2), alignSelf: 'center' }} source={Images.lineGap} />
                <View style={{ margin: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('BookingHistoryThree')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View>
                            <Text style={{ color: colors.black, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmsemibold, lineHeight: 20, }}>Booking History</Text>
                            <Text style={{ color: colors.text, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmmedium, lineHeight: 20, }}>View more your Past & Scheduled Rides</Text>
                        </View>
                        <Image source={Images.arrow} />
                    </TouchableOpacity>
                    <Image style={{ width: deviceWidth(90), height: deviceHeight(0.2), alignSelf: 'center', marginTop: deviceHeight(3), marginBottom: deviceHeight(3) }} source={Images.lineGap} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View>
                            <Text style={{ color: colors.black, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmsemibold, lineHeight: 20, }}>Payments</Text>
                            <Text style={{ color: colors.text, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmmedium, lineHeight: 20, }}>Know your Payments Modes</Text>
                        </View>
                        <Image source={Images.arrow} />
                    </View>
                    <Image style={{ width: deviceWidth(90), height: deviceHeight(0.2), alignSelf: 'center', marginTop: deviceHeight(3), marginBottom: deviceHeight(3) }} source={Images.lineGap} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View>
                            <Text style={{ color: colors.black, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmsemibold, lineHeight: 20, }}>Help and Support</Text>
                            <Text style={{ color: colors.text, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmmedium, lineHeight: 20, }}>Need help with your Ride?</Text>
                        </View>
                        <Image source={Images.arrow} />
                    </View>
                    <Image style={{ width: deviceWidth(90), height: deviceHeight(0.2), alignSelf: 'center', marginTop: deviceHeight(3), marginBottom: deviceHeight(3) }} source={Images.lineGap} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View>
                            <Text style={{ color: colors.black, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmsemibold, lineHeight: 20, }}>Refer & Earn Program</Text>
                            <Text style={{ color: colors.text, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmmedium, lineHeight: 20, }}>Refer friends & earn ride offers on Ride24</Text>
                        </View>
                        <Image source={Images.arrow} />
                    </View>
                    <Image style={{ width: deviceWidth(90), height: deviceHeight(0.2), alignSelf: 'center', marginTop: deviceHeight(3), marginBottom: deviceHeight(3) }} source={Images.lineGap} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View>
                            <Text style={{ color: colors.black, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmsemibold, lineHeight: 20, }}>About Ride24</Text>
                            <Text style={{ color: colors.text, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmmedium, lineHeight: 20, }}>Know more our Ride24 Platform</Text>
                        </View>
                        <Image source={Images.arrow} />
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.field, padding: 15, marginTop: 20 }}>
                    <View>
                        <Text style={{ color: colors.black, fontSize: deviceHeight(1.9), fontFamily: Fonts.ibmsemibold, lineHeight: 20, }}>Logout Options</Text>
                    </View>
                    <Image source={Images.arrow} />
                </View>
                <Text style={{ color: colors.text, textAlign: 'center', fontFamily: Fonts.ibmmedium, fontSize: deviceWidth(4), paddingVertical: deviceHeight(3) }}>App version - 3.2</Text>
            </View>
        </ScrollView>
    )
}

export default BookingHistoryTwo

const styles = StyleSheet.create({})