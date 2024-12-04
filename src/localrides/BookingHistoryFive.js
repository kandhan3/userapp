import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styling } from '../common/Styling'
import { colors } from '../common/Colors'
import { deviceHeight, deviceWidth } from '../common/Dimens'
import { Fonts } from '../common/Fonts'
import { Images } from '../common/Images'

const BookingHistoryFive = () => {
    return (
        <View style={styling.container}>
            <View style={{ backgroundColor: colors.field, width: deviceWidth(90), height: deviceHeight(5), alignSelf: 'center', margin: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ color: colors.text, fontFamily: Fonts.ibmmedium }}>Booking ID</Text>
                <Text style={{ color: colors.black, fontFamily: Fonts.ibmmedium, marginLeft: deviceWidth(35) }}>mb23102s7gbyk</Text>
            </View>

            <View style={{ backgroundColor: colors.field, width: deviceWidth(90), height: deviceHeight(5), alignSelf: 'center', margin: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ color: colors.text, fontFamily: Fonts.ibmmedium }}>Payment</Text>
                <Text style={{ color: colors.black, fontFamily: Fonts.ibmmedium, marginLeft: deviceWidth(55) }}>Cash</Text>
            </View>

            <View style={{ backgroundColor: colors.field, width: deviceWidth(90), height: deviceHeight(5), alignSelf: 'center', margin: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ color: colors.text, fontFamily: Fonts.ibmmedium }}>Reason</Text>
                <Text style={{ color: colors.black, fontFamily: Fonts.ibmmedium, marginLeft: deviceWidth(20) }}>Expected a shorter wait time</Text>
            </View>

            <View style={{ padding: 20, rowGap: 10 }}>
                <TouchableOpacity style={[styling.field1, styles.destinationInput]}>
                    <Image source={Images.greendot} />
                    <TextInput
                        style={styling.textfield1}
                        placeholder="Enter Pickup Location"
                        placeholderTextColor={'#6B768A'}
                        editable={false}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[styling.field1, styles.destinationInput]}>
                    <Image source={Images.reddot} />
                    <TextInput
                        placeholder="Select Destination"
                        placeholderTextColor={'#6B768A'}
                        style={styling.textfield1}
                        editable={false}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default BookingHistoryFive

const styles = StyleSheet.create({
    destinationInput: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5,
        paddingHorizontal: 20,

    },
})