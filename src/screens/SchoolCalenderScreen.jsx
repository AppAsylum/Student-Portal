import {StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Colors from '../Constants/Colors';
import SchoolCalenderTable from '../components/SchoolCalenderTable';



const backArrow = require('../assets/icons/back.png');
const schoolLogo = require('../assets/images/SchoolLogo.png');

const SchoolCalenderScreen = ({navigation}) => {
  return (
    <SafeAreaView
    style={{
      backgroundColor: Colors.skyBlue,
      flex: 1
    }}
    >
      <ScrollView
      style={{
        flexGrow: 1
      }}
      >
          <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
          style={{
            justifyContent: 'center',
            paddingLeft: 12,
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
              marginTop: 0,
              alignSelf: 'center',
              height: 90,
              width: 90,
              backgroundColor: Colors.black,
              borderRadius: 10,
            }}
          />

      <View
        style={{
          marginTop: 21,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 18
          }}>
          Student Portal University, Lagos
        </Text>
        <Text
          style={{
            marginTop: 6,
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 15
          }}>
          REVISED ACADEMIC CALENDER OF EVENTS FOR THE COMPLETION OF {'\n'}
          2023/2024 ACADEMIC SESSION
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600'
          }}>
          (REGULAR STUDENT)
        </Text>
      </View>
      <View 
      style={{
        padding: 12
      }}
      >
      <Text
      style={{
        marginTop: 10
      }}
      >
        The Vice-Chancellor has,on behalf of the Senate, approved the Revised
        Academic Calender of Events for the completion of 2023/2024 academic
        session, for regular undergraduate student.
      </Text>
      </View>

    
    <SchoolCalenderTable />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SchoolCalenderScreen;

const styles = StyleSheet.create({});
