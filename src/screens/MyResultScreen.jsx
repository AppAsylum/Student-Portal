import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../Constants/Colors';
import ResultTable from '../components/ResultTable';
import { auth, db } from '../firebaseConfig/firebase';
import { doc, getDoc } from "firebase/firestore";

const backArrow = require('../assets/icons/back.png');
const schoolLogo = require('../assets/images/SchoolLogo.png');

const MyResultScreen = ({navigation}) => {
  const [fullName, setFullName] = useState("");
  const [matricNumber, setMatricNumber] = useState("");
  
  const fetchUserData=async()=> {
    const docRef = doc(db, "Users Information", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
      setFullName(docSnap.data().fullName)
      setMatricNumber(docSnap.data().matricNumber)
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
        contentContainerStyle={{
          flexGrow: 1
        }}
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
          height: 105,
          width: 105,
          backgroundColor: Colors.black,
          borderRadius: 10,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View
          style={{
            gap: 10,
            justifyContent: 'space-around',
          }}>
          <Text
           style={{
            fontSize: 19,
            fontWeight: '600'
          }}
          >{fullName}</Text>
          <Text
         style={{
          fontSize: 19,
          fontWeight: '600'
        }}
          >{matricNumber}</Text>
        </View>

        <View
          style={{
            gap: 10,
            justifyContent: 'space-around',
          }}>
          <Text
          style={{
            fontSize: 16,
            fontWeight: '600'
          }}
          >Mode of Entry: UME</Text>
          <Text
          style={{
            fontSize: 16,
            fontWeight: '600'
          }}
          >Year of Entry: 2023/2024</Text>
        </View>
      </View>

      <ResultTable />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyResultScreen;

const styles = StyleSheet.create({});
