import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from '../ValidationScreens/Login';
import Register from '../ValidationScreens/Register';
import HomeScreen from '../Screens/HomeScreen';

export default function AuthStack() {
    const Stack = createNativeStackNavigator();
  
    return (  
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
      
    )
  }