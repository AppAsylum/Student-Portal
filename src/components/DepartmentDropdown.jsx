import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Colors from '../Constants/Colors';

const DepartmentDropdown = ({
  showDepartmentProgram,
  selectedDepartmentProgram,
  setShowDepartmentProgram,
  setSelectedDepartmentProgram,
}) => {
  const options = [
    'Engineering',
    'Medical Science',
    'Arts and Craft',
    'Project Management',
    'Economics',
    'Philisophy',
  ];

  const handlePress = () => {
    setShowDepartmentProgram(!showDepartmentProgram);
  };

  const handleOptionPress = item => {
    setSelectedDepartmentProgram(item);
    setShowDepartmentProgram(false);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', marginTop: 20}}>
      <Text>Department</Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          width: 145,
          alignItems: 'center',
        }}
        onPress={handlePress}>
        <Text>{selectedDepartmentProgram || 'Select Department'}</Text>
      </TouchableOpacity>

      {showDepartmentProgram && (
        <View
          style={{
            backgroundColor: 'white',
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 5,
            height: 100,
            marginBottom: 20,
            overflow: 'hidden',
          }}>
          <FlatList
            data={options}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                }}
                onPress={() => handleOptionPress(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
          />
        </View>
      )}
    </View>
  );
};

export default DepartmentDropdown;

