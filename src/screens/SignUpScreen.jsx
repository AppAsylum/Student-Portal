import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Colors from '../Constants/Colors';
import ProgramDropdown from '../components/ProgramDropdown';
import DepartmentDropdown from '../components/DepartmentDropdown';
import {auth, db} from '../firebaseConfig/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';

const {height, width} = Dimensions.get('window');

const schoolLogo = require('../assets/images/SchoolLogo.png');
const userIcon = require('../assets/icons/user.png');
const passwordIcon = require('../assets/icons/unlock.png');
const viewIcon = require('../assets/icons/eye.png');
const hideIcon = require('../assets/icons/eye-closed.png');
const plusIcon = require('../assets/icons/plus.png');
const emailIcon = require('../assets/icons/email.png');
const numberBlock = require('../assets/icons/number-blocks.png');
const backArrow = require('../assets/icons/back.png');

const SignUpScreen = ({navigation}) => {
  const [selectImage, setSelectImage] = useState(null);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [matricNumber, setMatricNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showProgram, setShowProgram] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showDepartmentProgram, setShowDepartmentProgram] = useState(false);
  const [selectedDepartmentProgram, setSelectedDepartmentProgram] =
    useState(null);

  const saveUserDetails = async () => {
    await setDoc(doc(db, 'Users Information', auth.currentUser.uid), {
      fullName,
      matricNumber,
      selectImage,
      selectedProgram,
      selectedDepartmentProgram,
      email,
    });
  };
  const registerPress = () => {
    createUserWithEmailAndPassword(auth, email, password, confirmPassword)
      .then(userCredential => {
        const user = userCredential.user;
        if (user) {
          Alert.alert('User successfully registered!');
          navigation.navigate('StudentPortalScreen');
        }
        saveUserDetails();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode) {
          Alert.alert('Wrong Credentials');
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMatricNumberChange = inputText => {
    setMatricNumber(inputText);
  };
  const handleEmailChange = inputText => {
    setEmail(inputText);
  };
  const handleFullnameChange = inputText => {
    setFullName(inputText);
  };

  const handlePasswordChange = inputText => {
    setPassword(inputText);
  };

  const handleConfirmPasswordChange = inputText => {
    setConfirmPassword(inputText);
  };

  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        setSelectImage(response.assets[0].uri);
      }
    });
  };

  const handleButtonPress = () => {
    console.log('Matric Number:', matricNumber);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.skyBlue}}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: '600',
          }}>
          Register
        </Text>
        <TouchableOpacity
          onPress={ImagePicker}
          style={{
            borderRadius: 100,
            height: 105,
            width: 105,
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 28,
            backgroundColor: Colors.gray,
            overflow: 'hidden',
          }}>
          {selectImage ? (
            <Image
              style={{
                height: 105,
                width: '100%',
              }}
              source={{uri: selectImage}}
            />
          ) : (
            <View style={{alignItems: 'center'}}>
              <Image
                source={userIcon}
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: 10,
                }}
              />
            </View>
          )}
        </TouchableOpacity>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-evenly',
            width: 110,
          }}>
          <TouchableOpacity onPress={ImagePicker}>
            <Image
              source={plusIcon}
              style={{
                height: 14,
                width: 14,
              }}
              tintColor={Colors.red}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: '600',
            }}>
            Profile Image
          </Text>
        </View>

        <View
          style={{
            height: height,
            marginTop: 28,
            backgroundColor: Colors.white,
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
          }}>
          <View
            style={{
              marginTop: 28,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={userIcon}
              style={{
                height: 20,
                width: 20,
              }}
            />
            <TextInput
              style={{
                width: 290,
                height: 60,
                borderColor: 'gray',
                borderBottomWidth: 1,
                paddingHorizontal: 24,
              }}
              placeholder="Enter Your Full Name"
              onChangeText={handleFullnameChange}
              value={fullName}
            />
          </View>

          <View
            style={{
              height: 1,
            }}
          />

          <View
            style={{
              marginTop: 18,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={emailIcon}
              style={{
                height: 20,
                width: 20,
              }}
            />
            <TextInput
              style={{
                width: 290,
                height: 60,
                borderColor: 'gray',
                borderBottomWidth: 1,
                paddingHorizontal: 24,
              }}
              placeholder="Enter your email"
              onChangeText={handleEmailChange}
              value={email}
            />
          </View>

          <View
            style={{
              height: 17,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={numberBlock}
              style={{
                height: 19,
                width: 19,
              }}
            />
            <TextInput
              style={{
                width: 290,
                height: 60,
                borderColor: 'gray',
                borderBottomWidth: 1,
                paddingHorizontal: 24,
              }}
              placeholder="Enter your Matric Number"
              onChangeText={handleMatricNumberChange}
              value={matricNumber}
            />
            <View style={{height: 10, width: 10}} />
          </View>

          <View
            style={{
              height: 17,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 75,
            }}>
            <Image
              source={passwordIcon}
              style={{
                height: 25,
                width: 25,
                marginRight: 0,
              }}
            />
            <View style={{width: 295}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={{
                    flex: 1,
                    height: 60,
                    borderColor: 'gray',
                    borderBottomWidth: 1,
                    paddingHorizontal: 24,
                  }}
                  placeholder="Password"
                  onChangeText={handlePasswordChange}
                  value={password}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Image
                    source={showPassword ? viewIcon : hideIcon}
                    style={{
                      height: 22,
                      width: 22,
                      marginRight: 0,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 17,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 75,
            }}>
            <Image
              source={passwordIcon}
              style={{
                height: 25,
                width: 25,
                marginRight: 0,
              }}
            />
            <View style={{width: 295}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={{
                    flex: 1,
                    height: 60,
                    borderColor: 'gray',
                    borderBottomWidth: 1,
                    paddingHorizontal: 24,
                  }}
                  placeholder="Confirm Password"
                  onChangeText={handleConfirmPasswordChange}
                  value={confirmPassword}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                  <Image
                    source={showConfirmPassword ? viewIcon : hideIcon}
                    style={{
                      height: 22,
                      width: 22,
                      marginRight: 0,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{}}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
            }}>
            <ProgramDropdown
              showProgram={showProgram}
              selectedProgram={selectedProgram}
              setShowProgram={setShowProgram}
              setSelectedProgram={setSelectedProgram}
            />
            <DepartmentDropdown
              showDepartmentProgram={showDepartmentProgram}
              selectedDepartmentProgram={selectedDepartmentProgram}
              setShowDepartmentProgram={setShowDepartmentProgram}
              setSelectedDepartmentProgram={setSelectedDepartmentProgram}
            />
          </View>
          <TouchableOpacity
            onPress={registerPress}
            activeOpacity={0.9}
            style={{
              backgroundColor: Colors.blue,
              marginTop: 60,
              // marginBottom: 170,
              height: 50,
              width: 280,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: Colors.white,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
