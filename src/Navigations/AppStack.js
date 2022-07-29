import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import TabNavigation from './TabNavigation';

export default function AppStack() {

  const HomeStack = createNativeStackNavigator();
  
    return (
    
        <HomeStack.Navigator >
          <HomeStack.Screen name='Home2' component={TabNavigation} options={{headerShown:false}}/>   
        </HomeStack.Navigator>
      
    )
  }