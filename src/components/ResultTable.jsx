import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig/firebase';
import Colors from '../Constants/Colors';

const RegistrationFormTable = () => {
  const windowWidth = useWindowDimensions().width;
  const [tableHead, setTableHead] = useState(['Course Code', 'Unit', 'GP']);
  const [courses, setCourses] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [totalGPA, setTotalGPA] = useState(0);

  const fetchUserData = async () => {
    const docRef = doc(db, "Users Information Courses", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userCourses = docSnap.data().courses || [];
      setCourses(userCourses);

      let userGPValues = docSnap.data().gradePoint || {};

     
      const hardcodedGPValues = {
        ENG101: 4,
        FAT201: 3,
        AEG202: 3,
        GCD304: 5,
        CSE302: 3,
        FAD303: 2,
      };

      if (Object.keys(userGPValues).length === 0) {
        await setDoc(docRef, { gradePoint: hardcodedGPValues }, { merge: true });
        userGPValues = hardcodedGPValues;
      }

      const newData = userCourses.map(course => [
        course.courseCode,
        course.units,
        userGPValues[course.courseCode] || 'N/A',
      ]);
      setTableData(newData);

      // Calculate total GPA
      const totalGP = userCourses.reduce((total, course) => {
        const gp = userGPValues[course.courseCode] || 0;
        return total + gp;
      }, 0);

      // Calculate GPA by dividing total GP by the number of courses
      const gpa = userCourses.length > 0 ? totalGP / userCourses.length : 0;
      setTotalGPA(gpa);
    } else {
      console.log("No such document");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const [tableWidth, setTableWidth] = useState(Dimensions.get('window').width - 32);

  const textStyle = { margin: 11, fontWeight: '400', textAlign: 'center' };

  useLayoutEffect(() => {
    const updateTableWidth = () => {
      setTableWidth(windowWidth - 32);
    };

    updateTableWidth();

    return () => {
    };
  }, [windowWidth]);

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={textStyle}
          widthArr={[tableWidth * 0.36, tableWidth * 0.3, tableWidth * 0.4]}
        />
        <Rows
          style={styles.table}
          widthArr={[tableWidth * 0.36, tableWidth * 0.3, tableWidth * 0.4]}
          data={tableData}
          textStyle={textStyle}
        />
      </Table>

      <View style={styles.totalGPAContainer}>
        <Text style={styles.totalGPAText}>Total GPA: {totalGPA.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default RegistrationFormTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  head: {
    height: 50,
    backgroundColor: '#f1f8ff',
  },
  table: {
    borderRadius: 10,
    height: 90
  },
  totalGPAContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalGPAText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
