import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import WelcomeScreen from './src/screens/LoginSignupScreens/WelcomeScreen';
import LoginScreen from './src/screens/LoginSignupScreens/LoginScreen';
import RootNavigations from './src/RootNavigations';
 
export default function App() {
  return (
    <View style={styles.maincontainer}>
     <RootNavigations/>
    {/*<WelcomeScreen/>
     <LoginScreen/>*/}
      
    </View>
  );
}

const styles = StyleSheet.create({
maincontainer:{
  flex:1
},

});
