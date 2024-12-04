import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { styling } from '../common/Styling'
import { colors } from '../common/Colors'
import { Fonts } from '../common/Fonts'
import { Images } from '../common/Images'
import { deviceHeight, deviceWidth } from '../common/Dimens'
import Button from '../common/Button'
import { ScrollView } from 'react-native-gesture-handler'
import BookingHistoryOne from './BookingHistoryOne'
import { useNavigation } from '@react-navigation/native'
import RadioForm from 'react-native-simple-radio-button';


const BookingHistoryFour = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    const [selectedOption, setSelectedOption] = useState(0);

    const radioOptions = [
        { label: 'Expected a shorter wait time', value: 0 },
        { label: 'Driver Denied Duty', value: 1 },
        { label: 'Got a Better/Faster Ride', value: 2 },
        { label: 'Change My Plan', value: 3 },
        { label: 'Driver Demanded Extra Cash', value: 4 },
        { label: 'Car Not Unhygienic', value: 5 },
        { label: 'Other', value: 6 },

    ];

    return (
        <ScrollView>
            <View style={styling.container}>
                <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium, textAlign: 'center' }}>ReviewBooking</Text>
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
                <View>
                    <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium, textAlign: 'left', padding: 10 }}>Trip Details</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                        <Image resizeMode='contain' source={Images.minicar} style={{ width: deviceWidth(25), height: deviceWidth(25) }} />

                        <View style={{ flexDirection: 'column', paddingHorizontal: deviceWidth(16) }}>
                            <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium }}>Mini (4 Seater)</Text>
                            <Text style={{ color: colors.black, fontSize: 16 }}>Local Trip</Text>
                        </View>

                        <Image resizeMode='contain' source={Images.info} style={{ width: deviceWidth(5) }} />

                    </View>

                    <View style={styles.carDetails}>
                        <Text style={styles.carTitle}>Booking ID:</Text>
                        <Text style={styles.carInfo}>mb23102s7gbyk</Text>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium }}>Estimate Fare</Text>
                            <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium, paddingLeft: deviceWidth(35) }}>₹159 - ₹199</Text>
                        </View>
                        <Text style={{ color: colors.text, fontSize: 17, paddingLeft: deviceWidth(6), paddingTop: 10 }}>Including taxes</Text>

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

                    <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 30, justifyContent: 'center', marginTop: 10 }}>
                        <View>
                            <Text style={{ color: colors.black, fontSize: 15, fontFamily: Fonts.ibmmedium }}>26,Oct,2024, 07.30 PM</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                            <Image resizeMode='contain' source={Images.coupon} style={{ width: deviceWidth(5) }} />
                            <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium }}>Promo Code</Text>
                        </View>

                        <Image resizeMode='contain' source={Images.arrow} style={{ width: deviceWidth(5) }} />

                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 30, justifyContent: 'center', marginTop: 10 }}>
                        <Image resizeMode='contain' source={Images.payment} style={{ width: deviceWidth(10), height: deviceWidth(10) }} />


                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: colors.black, fontSize: 18, fontFamily: Fonts.ibmmedium }}>Payment</Text>
                            <Text style={{ color: colors.text, fontSize: 13, fontFamily: Fonts.ibmmedium }}>You can pay via cash or UPI for your ride</Text>
                        </View>

                        <Image resizeMode='contain' source={Images.arrow} style={{ width: deviceWidth(5) }} />

                    </View>

                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: deviceHeight(40), alignSelf: 'center' }}>
                        <Button
                            text={'Cancel Ride'}
                        />

                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: deviceHeight(3) }}>
                            <Text style={{ color: 'black', fontSize: deviceHeight(2), fontFamily: Fonts.ibmbold }}>Still want to cancel?</Text>
                            <Text style={{ color: colors.text, fontSize: deviceHeight(1.5), fontFamily: Fonts.ibmbold }}>Tell us why</Text>
                        </View>

                        <RadioForm
                            radio_props={radioOptions}
                            initial={0}
                            onPress={(value) => setSelectedOption(value)}
                            buttonColor={colors.black}
                            selectedButtonColor={colors.black}
                            labelStyle={{ fontSize: 16, marginVertical: 10 }}
                            formHorizontal={false}
                        />
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('BookingHistoryFive') }}
                            //  onPress={() => setModalVisible(false)}
                            style={{ marginTop: deviceHeight(3), width: deviceHeight(40), alignSelf: 'center' }}>
                            <Button text={'Submit'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

export default BookingHistoryFour

const styles = StyleSheet.create({
    destinationInput: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5,
        paddingHorizontal: 20,

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: deviceHeight(60)
    },
    carDetails: {
        flexDirection: 'row',
        // paddingHorizontal: deviceWidth(4),
        alignItems: 'center',
        backgroundColor: '#F7F9FB',
        width: deviceWidth(80),
        alignSelf: 'center',
        height: deviceHeight(5),
        justifyContent: 'center',
        borderRadius: 50,
        marginBottom: deviceHeight(2)
    },
    carTitle: {
        color: colors.black,
        fontSize: 16,
        fontFamily: Fonts.ibmbold,
    },
    carInfo: {
        color: colors.black,
        fontSize: 16,
        fontFamily: Fonts.ibmbold,
    },
})