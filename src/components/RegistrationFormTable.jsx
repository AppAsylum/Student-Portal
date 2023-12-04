import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig/firebase';

const RegistrationFormTable = () => {
  const windowWidth = useWindowDimensions().width;
  const [tableHead, setTableHead] = useState(['COURSE CODE', 'COURSE TITLE', 'UNITS']);
  const [courses, setCourses] = useState([]);
  const [tableData, setTableData] = useState([]);

  const fetchUserData = async () => {
    const docRef = doc(db, "Users Information Courses", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userCourses = docSnap.data().courses || [];
      setCourses(userCourses);

      const newData = userCourses.map(course => [course.courseCode, course.courseTitle, course.units]);
      setTableData(newData);
    } else {
      console.log("No such document");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const [tableWidth, setTableWidth] = useState(Dimensions.get('window').width - 32);

  const textStyle = { margin: 11, fontWeight: '400' };

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
          widthArr={[tableWidth * 0.36, tableWidth * 0.45, tableWidth * 0.2]}
        />
        <Rows  
          style={styles.table}
          widthArr={[tableWidth * 0.36, tableWidth * 0.45, tableWidth * 0.2]}
          data={tableData}
          textStyle={textStyle}
        />  
      </Table>
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
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  table: {
    height: 90
  },
});
