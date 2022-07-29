import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack'
import AppStack from './AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppNavigation(){
    const userTicket = AsyncStorage.getItem('userData');
    console.log("userticket",userTicket);
    return(
        <NavigationContainer>
            { userTicket != null ? <AppStack /> : <AuthStack /> }
        </NavigationContainer>
    )
}

