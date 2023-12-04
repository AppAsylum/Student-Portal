import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';

const SchoolCalendarTable = () => {
  const windowWidth = useWindowDimensions().width;
  const [tableHead, setTableHead] = useState(['Weeks', 'Days', 'Activities']);
  const [tableData, setTableData] = useState([
    ['1', 'Monday, October 17,2023', 'All students return to campus.First semester lectures continue alongside with registration.'],
    ['2', 'Wednesday,October 26, 2023 ', 'Senate Meeting'],
    ['3', 'Thursday,October 27, 2023', 'Orientation Programme for Year(1) Students(Regular)'],
    ['4', 'Friday, October 28 2023', 'Matriculation Ceremony'],
    ['5', 'Tuesday, November 1, 2023', 'Committee of Dean\'s meeting'],
    ['', 'Second Semester', ''],
    ['1', 'Wednesday, January 4, 2024', 'Second Semester Lectures Commences'],
    ['2', 'Wednesday, January 25, 2024', 'Senate Meeting'],
    ['3', 'Tuesday, Febraury 7, 2024', 'Committee of Dean\'s Meeting'],
    ['4', 'Monday, February 22, 2024', 'University-Wide Quiz'],
  ]);
  
  const [tableWidth, setTableWidth] = useState(Dimensions.get('window').width - 32); // Initial width


  const textStyle = { margin: 11, fontWeight: '400', textAlign: 'center' }; // Updated textStyle object

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
          widthArr={[tableWidth * 0.2, tableWidth * 0.40, tableWidth * 0.32]}
        />
        <Rows  
          style={styles.table}
          widthArr={[tableWidth * 0.2, tableWidth * 0.40, tableWidth * 0.32]}
          data={tableData}
          textStyle={textStyle}
        />  
      </Table>
    </View>  
  );
};

SchoolCalendarTable.mounted = false;
export default SchoolCalendarTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#fff',
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28

  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  table: {},
});
