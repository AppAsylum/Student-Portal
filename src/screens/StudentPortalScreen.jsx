import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Pressable,
  Modal,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import Colors from '../Constants/Colors';
import DateComponent from '../components/DateComponent';

const schoolLogo = require('../assets/images/SchoolLogo.png');
const calender = require('../assets/icons/calendar.png');
const logout = require('../assets/icons/logout.png');
const user = require('../assets/icons/user.png');

const {height, width} = Dimensions.get('window');

const icons = {
  BioDataScreen: require('../assets/icons/user.png'),
  SchoolCalenderScreen: require('../assets/icons/calendar.png'),
  CourseRegistrationScreen: require('../assets/icons/book.png'),
  CourseFormScreen: require('../assets/icons/eye.png'),
  MyResultScreen: require('../assets/icons/files.png'),
  NeedHelpScreen: require('../assets/icons/question.png'),
};

const data = [
  {key: 'BioDataScreen', title: 'Biodata'},
  {key: 'SchoolCalenderScreen', title: 'School Calender'},
  {key: 'CourseRegistrationScreen', title: 'Course Registration'},
  {key: 'CourseFormScreen', title: 'View Course Form'},
  {key: 'MyResultScreen', title: 'My Result'},
  {key: 'NeedHelpScreen', title: 'Need Help?'},
];

const StudentPortalScreen = ({navigation}) => {

  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const openLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  const closeLogoutModal = () => {
    setLogoutModalVisible(false);
  };


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.skyBlue}}>
      <ScrollView
      contentContainerStyle={{
        flexGrow: 3,
      }}
      >
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          flex: 0.1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={schoolLogo}
            style={{
              marginTop: 10,
              alignSelf: 'center',
              height: 60,
              width: 60,
              backgroundColor: Colors.black,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              marginTop: 10,
              paddingLeft: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
              }}>
              Student Portal
            </Text>

            <View
              style={{
                marginTop: 3,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 110,
              }}>
              <Image
                source={calender}
                style={{
                  height: 17,
                  width: 17,
                }}
              />
              <DateComponent />
            </View>
          </View>
        </View>

        <View
        style={{
          marginTop: 5,
          justifyContent: 'center',
          paddingRight: 15,
        }}>
        <TouchableOpacity onPress={openLogoutModal}>
          <Image
            source={logout}
            style={{
              height: 26,
              width: 26,
            }}
          />
        </TouchableOpacity>
      </View>
      </View>

      <Text
        style={{
          marginTop: 15,
          textAlign: 'center',
          fontSize: 16,
          fontWeight: '400',
          paddingTop: 10,
        }}>
        Registration in progress for this semester
      </Text>

      <View
        style={{
          flex: 1,
          marginTop: 35,
          backgroundColor: Colors.white,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          alignItems: 'center',
        }}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              style={
                {
                  flex: 1
                }
              }
              onPress={() => navigation.navigate(item.key)}>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 2,
                  borderColor: Colors.gray,
                  flexGrow: 2,
                  marginTop: 30,
                  alignItems: 'center',
                  padding: 10,
                  width: width -56,
                }}>
                <Image
                  source={icons[item.key]}
                  style={{width: 30, height: 30, marginRight: 10}}
                />
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

       {/* Logout Modal */}
       <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={closeLogoutModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Do you want to logout?</Text>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={closeLogoutModal}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonLogout]} onPress={() => {
              navigation.navigate('HomeScreen')
            }}
            >
              <Text style={styles.textStyle}>Logout</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentPortalScreen;

const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    margin: 10,
    minWidth: 100,
  },
  buttonClose: {
    backgroundColor: Colors.gray,
  },
  buttonLogout: {
    backgroundColor: Colors.red,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
