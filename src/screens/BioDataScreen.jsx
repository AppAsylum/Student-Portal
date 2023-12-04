import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../Constants/Colors';
import {launchImageLibrary} from 'react-native-image-picker';
import { auth, db } from '../firebaseConfig/firebase';
import { doc, getDoc } from "firebase/firestore";

const backArrow = require('../assets/icons/back.png');
const userIcon = require('../assets/icons/user.png');

const data = [
  {
    key: '1',
    fullname: 'John Doe',
    matricNo: '123456',
    program: 'Computer Science',
    session: '2023/2024',
    department: 'Engineering',
  },
  // Add more items as needed
];

const BioDataScreen = ({navigation}) => {
  const [selectImage, setSelectImage] = useState(null);

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

const[fullName,setFullName] = useState("")
const[matno,setMatNo] = useState("")
const[department,setDepartment] = useState("")


  const fetchuserData=async()=>{
    const docRef = doc(db, "Users Information", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      setSelectImage(docSnap.data().selectImage)
      setFullName(docSnap.data().fullName)
      setMatNo(docSnap.data().matricNumber)
      setDepartment(docSnap.data().selectedDepartmentProgram)
    } else {
      console.log("No such document!");
    }
  }
  useEffect(()=>{
    fetchuserData()
  },[])
  const renderItem = ({item}) => (
    <View
      style={{
        paddingLeft: 10,
      }}>
      <View
        style={{
          height: 70,
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderBottomColor: Colors.gray,
        }}>
        <Text style={{fontWeight: 'bold'}}>
          <Text
            style={{
              color: '#808080',
            }}>
            Fullname {' '}
          </Text> {fullName}</Text>
      </View>

      <View
        style={{
          height: 17,
        }}
      />

      <View
        style={{
          height: 70,
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderBottomColor: Colors.gray,
        }}>
        <Text>
          <Text
            style={{
              color: '#808080',
            }}>
            Matric no
          </Text> {matno}
        </Text>
      </View>

      <View
        style={{
          height: 17,
        }}
      />

      <View
        style={{
          height: 70,
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderBottomColor: Colors.gray,
        }}>
        <Text>
          <Text
            style={{
              color: '#808080',
            }}>
            Program
          </Text>{'  '}
          {item.program}
        </Text>
      </View>

      <View
        style={{
          height: 17,
        }}
      />

      <View
        style={{
          height: 70,
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderBottomColor: Colors.gray,
        }}>
        <Text>
          <Text
            style={{
              color: '#808080',
            }}>
            Session
          </Text>{' '}
          {item.session}
        </Text>
      </View>

      <View
        style={{
          height: 17,
        }}
      />

      <View
        style={{
          height: 70,
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderBottomColor: Colors.gray,
        }}>
        <Text>
          <Text
            style={{
              color: '#808080',
            }}>
            Department
          </Text>{' '}
          {department}
        </Text>
      </View>
    </View>
  );

  

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.skyBlue,
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <View
          style={{
            height: 45,
            marginTop: 15,
            flexDirection: 'row',
            width: 135,
            justifyContent: 'space-between',
            paddingLeft: 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
            style={{
              justifyContent: 'center',
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
              fontSize: 25,
            }}>
            Biodata
          </Text>
        </View>

        <View
          style={{
            backgroundColor: Colors.white,
            marginTop: 20,
            borderTopRightRadius: 28,
            borderTopLeftRadius: 28,
            flex: 1,
          }}>
          <TouchableOpacity
            onPress={ImagePicker}
            style={{
              borderRadius: 100,
              height: 115,
              width: 115,
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 20,
              backgroundColor: Colors.gray,
              overflow: 'hidden',
            }}>
              <Image
                style={{
                  height: 115,
                  width: '100%',
                }}
                source={{uri: `${selectImage}`}}
              />
            
          </TouchableOpacity>
          <View
            style={{
              marginTop: 25,
              paddingLeft: 10,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '700',
              }}>
              Personal Details
            </Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.key}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BioDataScreen;

const styles = StyleSheet.create({});
