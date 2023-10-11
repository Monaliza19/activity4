import React, { useState, useRef } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'; 

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const data = [
  {
    id: 1,
    name: 'Slide 1',
    image: require('../Carousel/Picture/ocean.jpg'),
  },
  {
    id: 2,
    name: 'Slide 2',
    image: require('../Carousel/Picture/fish.jpg'),
  },
  {
    id: 3,
    name: 'Slide 3',
    image: require('../Carousel/Picture/mountain.jpg'),
  },
];

const renderItem = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={{ width: 200, height: 200 }} />
      <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}>
        {item.name}
      </Text>
    </View>
  );
};

const mainCarousel = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View style={{ paddingTop: 200, alignItems: 'center' }}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          marginHorizontal: 8,
          backgroundColor: 'green',
        }}
      />
    </View>
  );
};

export default mainCarousel;
