import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { styling } from '../common/Styling'
import { deviceHeight, deviceWidth } from '../common/Dimens'
import { colors } from '../common/Colors'
import { Images } from '../common/Images'
import MapView from 'react-native-maps';

const Home = () => {
    return (
        <View style={styling.container}>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View style={{ flex: 1, justifyContent: 'flex-end', padding: 20, rowGap: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderRadius: 10, borderColor: colors.border, padding: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.image} source={require('../../assets/images/Car.png')}></Image>
                        <Text style={styling.textsub1}>Local Rides</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.image} source={require('../../assets/images/Car1.png')}></Image>
                        <Text style={styling.textsub1}>Rental</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.image} source={require('../../assets/images/Car2.png')}></Image>
                        <Text style={styling.textsub1}>Outstation</Text>
                    </View>
                </View>
                <View
                    style={[
                        styling.field1,
                        {
                            flexDirection: 'row',
                            alignItems: 'center',
                            columnGap: 5,
                            paddingHorizontal: 20,
                        },
                    ]}>
                    <Image source={Images.greendot}></Image>
                    <TextInput
                        placeholder="Your Location"
                        placeholderTextColor={'#6B768A'}
                        style={styling.textfield1}
                        keyboardType="phone-pad"
                        maxLength={10}
                    ></TextInput>
                </View>
                <View
                    style={[
                        styling.field1,
                        {
                            flexDirection: 'row',
                            alignItems: 'center',
                            columnGap: 5,
                            paddingHorizontal: 20,
                        },
                    ]}>
                    <Image source={Images.reddot}></Image>
                    <TextInput
                        placeholder="Select Destination"
                        placeholderTextColor={'#6B768A'}
                        style={styling.textfield1}
                        keyboardType="phone-pad"
                        maxLength={10}
                    ></TextInput>
                </View>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    image: { width: deviceWidth(25), height: deviceHeight(7) }
})