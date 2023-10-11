import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Home ({Navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent:'center'
  },

  txt: {
    fontSize :26, fontWeight: 'bold'
  }



});