import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import BookmarkScreen from '../Screens/BookmarkScreen';
import HistoryScreen from '../Screens/HistoryScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import React from 'react';


const Tab = createBottomTabNavigator();
export default function TabNavigation (){
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Bookmark' component={BookmarkScreen} />
        <Tab.Screen name='History' component={HistoryScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    )
    
}