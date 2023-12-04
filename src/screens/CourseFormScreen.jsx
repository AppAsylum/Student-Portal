import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../Constants/Colors';
import RegistrationFormTable from '../components/RegistrationFormTable';
import DateComponent from '../components/DateComponent';
import { auth, db } from '../firebaseConfig/firebase';
import { doc, getDoc } from "firebase/firestore";


const backArrow = require('../assets/icons/back.png');
const schoolLogo = require('../assets/images/SchoolLogo.png');

const CourseFormScreen = ({navigation}) => {
  const [fullName, setFullName] = useState("");
  const [matricNumber, setMatricNumber] = useState("");
  const [email, setEmail] = useState('');

  const fetchUserData=async()=> {
    const docRef = doc(db, "Users Information", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
      setFullName(docSnap.data().fullName)
      setMatricNumber(docSnap.data().matricNumber)
      setEmail(docSnap.data().email)
    }
  }

  useEffect(()=> {
    fetchUserData()
  },[])
 
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.skyBlue,
      }}>
        <ScrollView
        contentContainerStyle={false}
        >
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
              height: 57,
              width: 57,
              backgroundColor: Colors.black,
              borderRadius: 10,
            }}
          />
      <Text
      style={{
        marginTop: 15,
        textAlign: 'center',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        fontSize: 25,
        fontWeight: '600'
      }}
      >Course Registration Form</Text>

      <View
      style={{
        marginTop: 5,
      }}
      >
    
        <View
        style={{
          paddingTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
        >
          <Text
          style={{
            fontSize: 18,
            fontWeight: '600'
          }}
          >{fullName} </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600'
            }}
          >{matricNumber} </Text>
        </View>

        <View
         style={{
          paddingTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-around',

        }}
        >
            <Text
              style={{
                fontSize: 17,
                fontWeight: '600'
              }}
            >{email} </Text>
            <View
            style={{
              flexDirection: 'row'
            }}
            >
          <Text
             style={{
              fontSize: 16,
              fontWeight: '600'
            }}
          >Date: </Text>
          <DateComponent />
          </View>
        </View>
      </View>

      <View
      style={{
        marginTop: 1
      }}
      >     
      <RegistrationFormTable />
      </View> 
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseFormScreen;

const styles = StyleSheet.create({});
