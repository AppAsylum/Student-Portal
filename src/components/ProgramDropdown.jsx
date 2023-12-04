import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Colors from '../Constants/Colors';

const ProgramDropdown = ({
  showProgram,
  selectedProgram,
  setShowProgram,
  setSelectedProgram,
}) => {
  const options = [
    'Computer Science',
    'Mechanical Engineering',
    'Medicine and Surgery',
    'Astronomy',
    'Anatomy',
    'Theatre Art',
  ];

  const handlePress = () => {
    setShowProgram(!showProgram);
  };

  const handleOptionPress = item => {
    setSelectedProgram(item);
    setShowProgram(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 20,
      }}>
      <View
        style={{
          paddingRight: 90,
        }}>
        <Text
          style={{
            textAlign: 'left',
          }}>
          Program
        </Text>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          width: 145,
          alignItems: 'center',
        }}
        onPress={handlePress}>
        <Text>{selectedProgram || 'Select a Program'}</Text>
      </TouchableOpacity>

      {showProgram && (
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

export default ProgramDropdown;
