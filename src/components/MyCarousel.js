import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Colors from '../Constants/Colors';

const MyCarousel = () => {
  const flatlistRef = useRef();
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselData = [
    {
      id: "1",
      image: require("../assets/images/student1.jpg"),
    },
    {
      id: "2",
      image: require("../assets/images/student2.jpg"),
    },
    {
      id: "3",
      image: require("../assets/images/student3.jpg"),
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View 
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
      <View style={{ 
        marginTop: 10,
        width: screenWidth - 10,
        height: 320,
        marginHorizontal: 5, 
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
      }}>
        <View style={{ 
          width: screenWidth - 100, 
          height: 335,
          borderRadius: 10, 
          overflow: 'hidden', 
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15
        }}>
          <Image
            source={item.image}
            style={{
              height: '100%',
              width: screenWidth - 100,
              borderRadius: 10
            }}
            resizeMode='cover'
          />
        </View>
      </View>
      </View>
    );
  };
  
  const getItemLayout = (_, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (flatlistRef.current) {
        if (activeIndex === carouselData.length - 1) {
          flatlistRef.current.scrollToIndex({
            index: 0,
            animated: true,
          });
        } else {
          flatlistRef.current.scrollToIndex({
            index: activeIndex + 1,
            animated: true,
          });
        }
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex, carouselData.length]);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const renderDotIndicators = () => {
    return carouselData.map((_, index) => (
      <View
        key={index}
        style={{
          backgroundColor: index === activeIndex ? Colors.black : Colors.gray,
          height: 10,
          width: 10,
          borderRadius: 5,
          marginHorizontal: 6,
        }}
      ></View>
    ));
  };

  return (
    <View
    >
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        getItemLayout={getItemLayout}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}
      >
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({});
