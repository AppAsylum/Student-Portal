import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../Constants/Colors';

const {width, height} = Dimensions.get('window');

const backgroundImage = require('../assets/images/studentBackground.jpg');
const schoolLogo = require('../assets/images/SchoolLogo.png');
const rightArrow = require('../assets/icons/right-arrow.png');

const WelcomeScreen = ({navigation}) => {
  return (

    <ScrollView>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
     
        <SafeAreaView style={styles.screenContainer}>
          <Image
            source={schoolLogo}
            style={{
              marginTop: 10,
              alignSelf: 'center',
              height: 125,
              width: 125,
              backgroundColor: Colors.black,
              borderRadius: 10,
            }}
          />
          <View
            style={{
            //   backgroundColor: Colors.green,
              gap: 5,
              paddingTop: 375,
              paddingLeft: 20,
            }}>
            <Text
              style={{
                color: Colors.gray,
                fontSize: 20,
              }}>
              Hi, Welcome to
            </Text>
            <Text
              style={{
                color: Colors.white,
                fontSize: 20,
              }}>
              Student Portal University{'\n'}student Portal.
            </Text>
          </View>
          <TouchableOpacity
          onPress={()=> {
            navigation.navigate('HomeScreen')
          }}
          activeOpacity={1}
            style={{
              backgroundColor: Colors.white,
              height: 50,
              width: 180,
              marginTop: 20,
              marginLeft: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                // backgroundColor: Colors.skyBlue,
                width: 140,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: Colors.blue,
                  fontWeight: '600'
                }}>
                CONTINUE
              </Text>
              <Image
                source={rightArrow}
                style={{
                  marginTop: 3,
                  height: 15,
                  width: 15,
                  
                }}
                tintColor={Colors.blue}
              />
              <Image />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
      </ScrollView>
   
   
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  backgroundImage: {
    flexGrow: 1,
    resizeMode: 'cover',
    height: height,
  },
});
