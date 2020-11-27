import {
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableWithoutFeedback ,
  Image,
  Text,
  View,
  Alert
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from './app/screens/ViewImageScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";

export default function App() {

  return <View style={{
    backgroundColor: '#f8f4f4',
    padding : 20,
    paddingTop: 100,
  }}>
                <Card 
                title="Red Jacket for sale"
                subTitle="$100"
                image={require("./app/assets/jacket.jpg")} />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
