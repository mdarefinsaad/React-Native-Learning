import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color={colors.white} size="30"/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color={colors.white} size="35"/>
            </View>
            <Image resizeMode="contain" style={ styles.image} source={require("../assets/chair.jpg")}/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    closeIcon : {
        position: "absolute",
        top : 20,
        left : 20
    },
    container : {
        backgroundColor : colors.black,
        flex: 1
    },
    deleteIcon : {
        position: "absolute",
        top : 20,
        right : 20
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default ViewImageScreen;