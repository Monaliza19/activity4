import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Settings ({Navigation}) {
  return (
    <View style={styles.container}>
      <Text 
      onPress={() => Navigation.navigate('Home')}
      style={styles.txt}>Settings</Text>
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