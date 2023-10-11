import * as React from 'react';
import { Surface, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MyComponent = () => (
  <Surface style={styles.surface} elevation={4}>
     <Text>LIPARTO</Text>
  </Surface>
);

export default MyComponent;

const styles = StyleSheet.create({
  surface: {
    padding: 30,
    height: 100,
    width: 100,
    border: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});