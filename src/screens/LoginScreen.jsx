import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebaseConfig/firebase';

import Colors from '../Constants/Colors';

const backArrow = require('../assets/icons/back.png');

const schoolLogo = require('../assets/images/SchoolLogo.png');
const user = require('../assets/icons/user.png');
const passwordIcon = require('../assets/icons/unlock.png');
const view = require('../assets/icons/eye.png');
const hide = require('../assets/icons/eye-closed.png');

const {height, width} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMatricNumberChange = inputText => {
    setEmail(inputText);
  };

  const handlePasswordChange = inputText => {
    setPassword(inputText);
  };

  const handleButtonPress = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;

        if (user) {
          Alert.alert('User successfully login');
          navigation.navigate('StudentPortalScreen');
        }
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode) {
          Alert.alert('Invalid Credentials');
        }
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.skyBlue}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
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
        <View
          style={{
            marginTop: 5,
            height: 190,
          }}>
          {/* Matric */}
          <Image
            source={schoolLogo}
            style={{
              marginTop: 30,
              alignSelf: 'center',
              height: 87,
              width: 87,
              backgroundColor: Colors.black,
              borderRadius: 10,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 30,
              fontSize: 17,
              fontWeight: '700',
            }}>
            Login to your Portal
          </Text>
        </View>

        {/* Login container */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.white,
            borderTopRightRadius: 28,
            borderTopLeftRadius: 28,
          }}>
          <View
            style={{
              height: 440,
              alignItems: 'center',
              alignSelf: 'center',
              // backgroundColor: 'red'
            }}>
            <View
              style={{
                marginTop: 40,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: width,
                height: 75,
                alignSelf: 'center',
              }}>
              <Image
                source={user}
                style={{
                  height: 20,
                  width: 20,
                  marginTop: 20,
                  marginRight: 5,
                }}
              />
              <View>
                <Text
                  style={{fontWeight: '600', fontSize: 16, marginLeft: 13.5}}>
                  Email
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    style={{
                      width: 290,
                      height: 60,
                      borderColor: 'gray',
                      borderBottomWidth: 1,
                      // marginBottom: 10,
                      paddingHorizontal: 24,
                    }}
                    placeholder="Enter your Email"
                    onChangeText={handleMatricNumberChange}
                    value={email}
                  />
                  {/* Empty container just to create some space */}
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      // backgroundColor: 'red'
                    }}
                  />
                </View>
              </View>
            </View>

            {/* Empty container just to create some space */}
            <View style={{height: 17}} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 75,
                width: width,
                // backgroundColor: 'red'
              }}>
              <Image
                source={passwordIcon}
                style={{
                  height: 25,
                  width: 25,
                  marginTop: 20,
                  marginRight: 18,
                }}
              />
              <View style={{width: 295}}>
                <Text style={{fontWeight: '600', fontSize: 16}}>Password</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    style={{
                      width: 290,
                      height: 60,
                      borderColor: 'gray',
                      borderBottomWidth: 1,
                      // marginBottom: 10,
                      paddingHorizontal: 24,
                    }}
                    placeholder="Enter your password"
                    onChangeText={handlePasswordChange}
                    value={password}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Image
                      source={showPassword ? view : hide}
                      style={{
                        height: 22,
                        width: 22,
                        marginRight: 20,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={handleButtonPress}
              activeOpacity={0.9}
              style={{
                backgroundColor: Colors.blue,
                marginTop: 60,
                height: 50,
                width: 280,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.white,
                }}>
                Login
              </Text>
            </TouchableOpacity>
            
            <View
              style={{
                marginTop: 23,
                flexDirection: 'row',
                // backgroundColor: 'red',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '500',
                }}>
                Having issues logging in ?{' '}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: Colors.blue,
                    fontSize: 13,
                    fontWeight: '500',
                  }}>
                  Contact Support
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                // backgroundColor: 'red',
                alignSelf: 'center',
                // width: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                By logging in you agree to the{' '}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: Colors.blue,
                    fontSize: 12,
                    fontWeight: '500',
                  }}>
                  Terms and Conditions
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
