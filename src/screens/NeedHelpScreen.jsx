import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors'
import HelperScreenTextComponent from '../components/HelperScreenTextComponent';

const backArrow = require('../assets/icons/back.png');
const schoolLogo = require('../assets/images/SchoolLogo.png');


const NeedHelpScreen = ({navigation}) => {
  return (
    <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: Colors.skyBlue
    }}
    >
      <ScrollView>
       <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
            style={{
              paddingTop: 10,
              justifyContent: 'center',
              paddingLeft: 12,
              width: 100,
            }}>
            <Image
              source={backArrow}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </TouchableOpacity>
          <Image
            source={schoolLogo}
            style={{
              alignSelf: 'center',
              height: 79,
              width: 79,
              backgroundColor: Colors.black,
              borderRadius: 10,
            }}
          />
          <HelperScreenTextComponent />
          </ScrollView>
    </SafeAreaView>
  )
}

export default NeedHelpScreen

const styles = StyleSheet.create({})