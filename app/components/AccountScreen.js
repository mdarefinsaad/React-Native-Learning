import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import { View, StyleSheet, FlatList } from 'react-native';

import colors from '../config/colors';
import Icon from './Icon';
import ListItemSparator from './ListItemSparator';


const menuItem = [
    {
        title: "My Listing",
        icon : {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon : {
            name: "email",
            backgroundColor: colors.secondary
        } 
    }
]


function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                title="MD Arefin Saad"
                subTitle="mdarefinsaad@gmail.com"
                image={require('../assets/mosh.jpg')} />
            </View>

            <View style={styles.container}>
                <FlatList 
                    data={menuItem}
                    keyExtractor={menuItem => menuItem.title} //uniquely indentify each item in the data set
                    ItemSeparatorComponent={ListItemSparator}
                    renderItem={({item})=>
                        <ListItem 
                            title={item.title}
                            IconComponent={
                               <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            }
                        />
                    } />
            </View>
            
            <ListItem 
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d"/>
                }/>
             
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen : {
        backgroundColor: colors.light
    }
})

export default AccountScreen;