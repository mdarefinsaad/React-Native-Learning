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

export default function App() {

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <AppButton title="Login" onPress={() => console.log("Tapped")}/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
