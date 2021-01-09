import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';

import searchResults from '../../../assets/data/search';

import SuggestionRow from './SuggestionRow';

import { GooglePlacesAutocomplete  } from "react-native-google-places-autocomplete";



const DestinationSearchScreen = (props) => {

   // const [inputText, setInputText] = useState('');

    const navigation = useNavigation();

    
    return (
        <View style={styles.container} > 
            {/* Input Component */}

         
                <GooglePlacesAutocomplete
                    placeholder='Where are you going?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details); // the details provided in returns photos / lats longs/ etc
                        navigation.navigate('Guests');
                    }}
                    fetchDetails
                    styles={{
                        textInput: styles.textInput
                    }}
                    query={{
                        key: 'AIzaSyCVY8xs11_JXWMc-Uc4fXE2um6EnmdTpYg',
                        language: 'en',
                        types: '(cities)'
                    }}
                    suppressDefaultStyles
                    renderRow={(item) => <SuggestionRow item={item} />}
                />
               

            {/* List of Destination */}
          
        </View>
    );
}

export default DestinationSearchScreen;
