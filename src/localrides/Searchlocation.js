import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { styling } from '../common/Styling';
import { deviceHeight, deviceWidth } from '../common/Dimens';
import { colors } from '../common/Colors';
import { Images } from '../common/Images';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import Line from '../common/Line';
import Button from '../common/Button';
import Favorites from '../common/Favorites';

const Searchlocation = ({ navigation, route }) => {
    const [address, setAddress] = useState('');
    const [destination, setDestination] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const apiKey = 'AIzaSyDPgJZYAJjeWwIPYKlOjcIgP44_ABNsM7w';

    const picklocatoin = route?.params?.location

    useEffect(() => {
        const getLocation = async () => {
            if (picklocatoin) {
                try {
                    const addressFromCoords = await getAddressFromCoordinates(picklocatoin.latitude, picklocatoin.longitude);
                    setAddress(addressFromCoords);
                } catch (error) {
                    console.log();
                }
            }
        };
        getLocation();
    }, []);

    const getAddressFromCoordinates = async (latitude, longitude) => {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
        try {
            const response = await axios.get(url);
            if (response.data.status === 'OK') {
                return response.data.results[0].formatted_address || 'Address not found';
            }
            return 'Address not found';
        } catch (error) {
            console.error('Error fetching address:', error);
            return 'Address not found';
        }
    };

    const fetchSuggestions = async (input) => {
        if (!input) {
            setSuggestions([]);
            setDropdownVisible(false);
            return;
        }

        const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}`;
        try {
            const response = await axios.get(url);
            if (response.data.status === 'OK') {
                setSuggestions(response.data.predictions);
                setDropdownVisible(true);
            } else {
                setSuggestions([]);
                setDropdownVisible(false);
            }
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const handleSuggestionSelect = async (placeId) => {

        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;
        try {
            const response = await axios.get(url);
            if (response.data.status === 'OK') {
                const result = response.data.result;
                setDestination(result.formatted_address);
                setDropdownVisible(false);
                navigation.navigate('home',{destlocation:result.geometry.location})
            }
        } catch (error) {
            console.error('Error fetching place details:', error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styling.container}>
                <View style={{ padding: 20, rowGap: 10 }}>
                    <Image source={Images.back} />
                    <View style={[styling.field1, styles.destinationInput]}>
                        <Image source={Images.greendot} />
                        <TextInput
                            placeholder="Your Location"
                            placeholderTextColor={'#6B768A'}
                            style={styling.textfield1}
                            value={address}
                            editable={false}
                        />
                    </View>
                    <View style={[styling.field1, styles.destinationInput]}>
                        <Image source={Images.reddot} />
                        <TextInput
                            placeholder="Select Destination"
                            placeholderTextColor={'#6B768A'}
                            style={styling.textfield1}
                            value={destination}
                            onChangeText={(text) => {
                                setDestination(text);
                                fetchSuggestions(text);
                            }}
                        />
                    </View>

                    <Line></Line>
                    {isDropdownVisible && (
                        <View style={styles.dropdownContainer}>
                            <Text style={styling.textfield1}>Suggestions</Text>
                            <FlatList
                                data={suggestions}
                                keyExtractor={(item) => item.place_id}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={styles.suggestionItem}
                                        onPress={() => handleSuggestionSelect(item.place_id)}
                                    >
                                        <Text>{item.description}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    )}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', columnGap: 10}}>
                        <Favorites text={'Add Home'} image1={Images.home} flex={true}></Favorites>
                        <Favorites text={'Add Work'} image1={Images.work} flex={true}></Favorites>
                    </View>
                    <View><Favorites text={'Favourite Places'} image1={Images.work} image2={Images.arrow}></Favorites></View>

                    <View style={{position:'absolute', top: deviceHeight(80),left:deviceWidth(5), rowGap: 10 }}>
                        <Text style={styling.textsub1}>
                            If You are not able to find the location from search
                        </Text>
                        <TouchableOpacity >
                            <Button text={'Set Location on Map'}></Button>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    destinationInput: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    dropdownContainer: {
        backgroundColor: '#fff',
        borderRadius: 5,
        // position: 'absolute',
        // top: deviceHeight(30),
        // left: 20,
        // right: 20,
        maxHeight: deviceHeight(20),
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        zIndex: 10,
        padding: 5
    },
    suggestionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
});

export default Searchlocation;




