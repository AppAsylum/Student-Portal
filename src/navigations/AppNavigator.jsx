import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import StudentPortalScreen from '../screens/StudentPortalScreen';
import BioDataScreen from '../screens/BioDataScreen';
import SchoolCalenderScreen from '../screens/SchoolCalenderScreen';
import CourseRegistrationScreen from '../screens/CourseRegistrationScreen';
import CourseFormScreen from '../screens/CourseFormScreen';
import MyResultScreen from '../screens/MyResultScreen';
import NeedHelpScreen from '../screens/NeedHelpScreen';




const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}
    >
        <Stack.Screen name='WelcomeScreen'
         component={WelcomeScreen} 
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
        <Stack.Screen name='HomeScreen'
         component={HomeScreen} 
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
         <Stack.Screen name='SignUpScreen'
         component={SignUpScreen} 
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
        <Stack.Screen name='LoginScreen'
         component={LoginScreen} 
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
        <Stack.Screen name='StudentPortalScreen'
         component={StudentPortalScreen} 
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
        <Stack.Screen name='BioDataScreen'
         component={BioDataScreen} 
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
        <Stack.Screen name='SchoolCalenderScreen'
         component={SchoolCalenderScreen} 
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
        <Stack.Screen name='CourseRegistrationScreen'
         component={CourseRegistrationScreen} 
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
        <Stack.Screen name='CourseFormScreen'
         component={CourseFormScreen} 
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
        <Stack.Screen name='MyResultScreen'
         component={MyResultScreen} 
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
        <Stack.Screen name='NeedHelpScreen'
         component={NeedHelpScreen} 
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})