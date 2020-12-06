import {
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableWithoutFeedback ,
  Image,
  Text,
  View,
  Alert,
  TextInput,
  Switch
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from './app/screens/ViewImageScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/components/AccountScreen'
import LisitingsScreen from './app/screens/ListingsScreens'
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker'


const categories = [
  {label: "Furniture", value:1},
  {label: "Clothing", value:2},
  {label: "Cameras", value:3},
]


export default function App() {
  const [isNew, setIsNew] = useState(false);

  const [firstName, setFirstName] = useState('');
  return ( 
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="Category"/>
      <AppTextInput icon="email" placeholder="email"/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
