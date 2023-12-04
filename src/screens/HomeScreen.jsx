import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors';
import MyCarousel from '../components/MyCarousel';

const schoolLogo = require('../assets/images/SchoolLogo.png');

const HomeScreen = ({navigation}) => {


  const signUpPress = () => {
    navigation.navigate("SignUpScreen")
  }

  return (
    <SafeAreaView>
        <ScrollView>
        <Image
            source={schoolLogo}
            style={{
              marginTop: 10,
              alignSelf: 'center',
              height: 57,
              width: 57,
              backgroundColor: Colors.black,
              borderRadius: 10,
            }}
          />
          <MyCarousel/>
          <Text
          style={{
            textAlign: 'center',
            marginTop: 25,
            fontSize: 20
          }}
          >Student Portal University</Text>
          <Text
          style={{
            textAlign: 'center',
            marginTop: 15
          }}
          >
            Application Registration, Payment and {'\n'}many more
          </Text>
          <TouchableOpacity
          onPress={signUpPress}
          activeOpacity={0.9}
          style={{
            backgroundColor: Colors.blue,
            alignSelf: 'center',
            height: 50,
            width: 250,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15
        
          }}
          >
            <Text
            style={{
                fontSize: 15,
                color: Colors.white
            }}
            >Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen')
          }}
          activeOpacity={0.9}
          style={{
            backgroundColor: Colors.blue,
            alignSelf: 'center',
            height: 50,
            width: 250,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15
          }}
          >
            <Text
            style={{
                fontSize: 15,
                color: Colors.white
            }}
            >Login</Text>
          </TouchableOpacity>
          <View 
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            marginTop: 50
            
          }}
          >
            <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
            <Text
            style={{
                fontSize: 12,
                fontWeight: '500'
            }}
            >By logging in you agree to the </Text>
           <TouchableOpacity>
            <Text
            style={{
                color: Colors.blue,
                fontSize: 12,
                fontWeight: '500'
            }}
            >Terms and Conditions</Text>
           </TouchableOpacity>
           </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})