import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import React, {useState} from 'react';
import Colors from '../Constants/Colors';
import {doc, setDoc} from 'firebase/firestore';
import {auth, db} from '../firebaseConfig/firebase';

const schoolLogo = require('../assets/images/SchoolLogo.png');
const checkedIcon = require('../assets/icons/check.png');
const uncheckedIcon = require('../assets/icons/unchecked.png');
const backArrow = require('../assets/icons/back.png');




const CourseRegistrationScreen = ({navigation}) => {

  
  const [courses, setCourses] = useState([
    {
      id: '1',
      courseTitle: 'Electrical Engineering',
      courseCode: 'ENG101',
      units: 3,
      checked: false,
    },
    {
      id: '2',
      courseTitle: 'Fine Arts',
      courseCode: 'FAT201',
      units: 2,
      checked: false,
    },
    {
      id: '3',
      courseTitle: 'Aerospace Engineering',
      courseCode: 'AEG202',
      units: 4,
      checked: false,
    },
    {
      id: '4',
      courseTitle: 'Graphics Design',
      courseCode: 'GCD304',
      units: 1,
      checked: false,
    },
    {
      id: '5',
      courseTitle: 'Computer Science',
      courseCode: 'CSE302',
      units: 5,
      checked: false,
    },
    {
      id: '6',
      courseTitle: 'Fashion Design',
      courseCode: 'FAD303',
      units: 7,
      checked: false,
    },
    {
      id: '8',
      courseTitle: 'Environmental Science',
      courseCode: 'ENS208',
      units: 3,
      checked: false,
    },
    {
      id: '9',
      courseTitle: 'Astronomy Fundamentals',
      courseCode: 'ASF303',
      units: 2,
      checked: false,
    },
    {
      id: '10',
      courseTitle: 'Biology',
      courseCode: 'BIO304',
      units: 4,
      checked: false,
    },
    {
      id: '11',
      courseTitle: 'Biomedical Engineering',
      courseCode: 'BIE408',
      units: 2,
      checked: false,
    },
    {
      id: '12',
      courseTitle: 'Chemical Engineering',
      courseCode: 'CHE303',
      units: 3,
      checked: false,
    },
    {
      id: '13',
      courseTitle: 'Civil Engineering',
      courseCode: 'CEG104',
      units: 4,
      checked: false,
    },
    {
      id: '14',
      courseTitle: 'Physics',
      courseCode: 'PHY308',
      units: 4,
      checked: false,
    },
    {
      id: '15',
      courseTitle: 'Geology',
      courseCode: 'GEO202',
      units: 2,
      checked: false,
    },
    {
      id: '16',
      courseTitle: 'Art History',
      courseCode: 'AHY307',
      units: 1,
      checked: false,
    },
    {
      id: '18',
      courseTitle: 'Chemistry',
      courseCode: 'CHM226',
      units: 2,
      checked: false,
    },
    {
      id: '19',
      courseTitle: 'Film Studies',
      courseCode: 'FLM342',
      units: 3,
      checked: false,
    },
    {
      id: '20',
      courseTitle: 'Mechanical Engineering',
      courseCode: 'MEE202',
      units: 4,
      checked: false,
    },
    {
      id: '21',
      courseTitle: 'Creative Arts',
      courseCode: 'CRT505',
      units: 2,
      checked: false,
    },
  ]);


  const saveUserDetails = async () => {
    const selectedCourses = courses.filter(course => course.checked);


    await setDoc(doc(db, 'Users Information Courses', auth.currentUser.uid), {
      courses: selectedCourses,
    });
    navigation.navigate("CourseFormScreen")
  };

  const handleCheckboxToggle = id => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === id ? {...course, checked: !course.checked} : course,
      ),
    );
  };

  const renderItem = ({item}) => (
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
      <CheckBox
        checked={item.checked}
        onPress={() => handleCheckboxToggle(item.id)}
        checkedIcon={
          <Image source={checkedIcon} style={{width: 25, height: 25}} />
        }
        uncheckedIcon={
          <Image source={uncheckedIcon} style={{width: 25, height: 25}} />
        }
      />
      <Text
        style={{
          marginLeft: 10,
        }}>{`${item.courseTitle} (${item.courseCode}) - ${item.units} units`}</Text>
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.skyBlue,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
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
            marginTop: 5,
            alignSelf: 'center',
            height: 115,
            width: 115,
            backgroundColor: Colors.black,
            borderRadius: 10,
          }}
        />
        <Text
          style={{
            marginTop: 15,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600',
          }}>
          Register your Courses here
        </Text>
        <View
          style={{
            marginTop: 15,
          }}>
          <FlatList
            data={courses}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={saveUserDetails}
            style={{
              marginTop: 5,
              alignSelf: 'center',
              backgroundColor: Colors.blue,
              width: 250,
              height: 50,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseRegistrationScreen;

const styles = StyleSheet.create({});
