import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';

function AccountScreen(props) {
    return (
        <Screen>
            <ListItem 
               title="MD Arefin Saad"
               subTitle="mdarefinsaad@gmail.com"
               image={require('../assets/mosh.jpg')} />
        </Screen>
    );
}

export default AccountScreen;