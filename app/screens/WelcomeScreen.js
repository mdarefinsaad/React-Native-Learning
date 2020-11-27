import React from 'react';

import AppButton from '../components/AppButton';

import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
 
 function WelcomeScreen (props) {
     return (
         /* Welcome Screen Image Background */
         <ImageBackground 
            blurRadius={10}
            style={styles.background} 
            source={require('../assets/background.jpg')}>

            {/* Logo */}
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.tagline}>Sell what you dont need</Text>
            </View>

            <View style={styles.buttonContainer}>
                {/* Login Button*/}
                <AppButton title="Login" /> 
                
                {/* Register Button*/}
                <AppButton title="Register" color="secondary"/> 
            </View>
            
            
            
         </ImageBackground>
     );
 }

 const styles = StyleSheet.create({
     background : {
         flex: 1,
         justifyContent: "flex-end",
         alignItems: "center"
     },
     buttonContainer :{
         padding: 10,
         width: "100%"
     },
     registerButton : {
         width : "100%",
         height : 70,
         backgroundColor : "#4ecdc4"
     },
     logo : {
         width : 100,
         height : 100,
     },
     logoContainer : {
         position: "absolute",
         top: 70,
         alignItems: "center"
     },
     tagline:{
         fontSize: 25,
         fontWeight: "600",
         paddingVertical: 20
     }
     
 })
 
 export default WelcomeScreen;
