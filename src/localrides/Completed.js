import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styling } from '../common/Styling'
import { Images } from '../common/Images'
import { Fonts } from '../common/Fonts'
import { deviceHeight, deviceWidth } from '../common/Dimens'
import { colors } from '../common/Colors'
import SecondryButton from '../common/SecondryButton'
import Button from '../common/Button'

const Completed = () => {
    return (
        <View style={styling.container}>
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

            <View style={{ backgroundColor: colors.field, width: deviceWidth(90), height: deviceHeight(5), alignSelf: 'center', margin: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ color: colors.text, fontFamily: Fonts.ibmmedium }}>Booking ID</Text>
                <Text style={{ color: colors.black, fontFamily: Fonts.ibmmedium, marginLeft: deviceWidth(35) }}>mb23102s7gbyk</Text>
            </View>



            <View>
                <View style={{ borderWidth: 1, borderColor: '#E7EAF0', width: deviceWidth(90), alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium }}>Estimate Fare</Text>
                        <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium, paddingLeft: deviceWidth(50) }}>₹159</Text>
                    </View>
                    <Text style={{ color: colors.text, fontSize: 17, paddingTop: 10 }}>Including taxes</Text>
                </View>

                <View style={{ borderWidth: 1, borderColor: '#E7EAF0', width: deviceWidth(90), alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: deviceHeight(3) }}>
                        <Text style={{ color: colors.text, fontSize: 17 }}>Base fare</Text>
                        <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium, paddingLeft: deviceWidth(55) }}>₹55.25</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: deviceHeight(3) }}>
                        <Text style={{ color: colors.text, fontSize: 17 }}>Rate per km</Text>
                        <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium, paddingLeft: deviceWidth(50) }}>₹55.25</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: deviceHeight(3) }}>
                        <Text style={{ color: colors.text, fontSize: 17 }}>Ride time charge per min</Text>
                        <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium, paddingLeft: deviceWidth(26) }}>₹11.05</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: deviceHeight(3) }}>
                        <Text style={{ color: colors.text, fontSize: 17 }}>Waiting fee per min</Text>
                        <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium, paddingLeft: deviceWidth(40) }}>₹1.27</Text>
                    </View>
                </View>


            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium }}>Ratings</Text>
                <Image resizeMode='contain' source={Images.star} style={{ width: deviceWidth(25), height: deviceWidth(25), marginLeft: deviceWidth(45) }} />
            </View>

            <TouchableOpacity style={{ width: deviceHeight(40), alignSelf: 'center', marginBottom: deviceHeight(5) }} >
                <SecondryButton text={'Download Invoice'} />
            </TouchableOpacity>

            <TouchableOpacity style={{ width: deviceHeight(40), alignSelf: 'center', marginBottom: deviceHeight(5) }} >
                <Button text={'Submit'} />
            </TouchableOpacity>
        </View>
    )
}

export default Completed

const styles = StyleSheet.create({
    destinationInput: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5,
        paddingHorizontal: 20,

    },
})