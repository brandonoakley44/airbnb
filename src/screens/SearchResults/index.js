import React from "react";
import { View, Text, FlatList } from 'react-native';

import Post from '../../components/Post';
import feed from '../../../assets/data/feed';

const SearchResultsScreen = (props) => {
    return (
        <FlatList
            data={feed}
            renderItem={({item}) => <Post post={item} /> }
        />
    );
}

export default SearchResultsScreen;