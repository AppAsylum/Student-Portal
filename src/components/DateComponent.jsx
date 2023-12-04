import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600'
        }}
      >{formattedDate}</Text>
    </View>
  );
};

export default DateComponent;
