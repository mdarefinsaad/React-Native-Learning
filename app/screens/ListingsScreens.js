import React from 'react';

import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg')
    }
];

function ListingScreens(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={ listing => listing.id.toString()} // converting the id to string is important because FlatList expects string from the data
                renderItem={({ item }) => 
                    <Card 
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                }/>
        </Screen>
    );
}


const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})
export default ListingScreens;