import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './screens/LoginSignupScreens/AuthNavigation';

const RootNavigations = () => {
  return (
    <NavigationContainer>
        <AuthNavigation/>
    </NavigationContainer>
    )
}

export default RootNavigations
