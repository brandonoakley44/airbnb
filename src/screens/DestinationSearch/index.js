import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';

import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState('');

    return (
        <View style={styles.container} > 
            {/* Input Component */}
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />
            {/* List of Destination */}
            <FlatList 
                data={searchResults}
                renderItem={({item}) => ( 
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name={"location-pin"} size={30} />
                    </View>

                <Text style={styles.locationText} >{item.description}</Text>
                </View>)}
            />
        </View>
    );
}

export default DestinationSearchScreen;
