import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, CheckBox } from 'react-native';

const Forms = () => {
  const [isCheckedBasketball, setIsCheckedBasketball] = useState(false);
  const [isCheckedVolleyball, setIsCheckedVolleyball] = useState(false);
  const [isCheckedBadminton, setIsCheckedBadminton] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Interests</Text>
      <View style={styles.checkBoxContainer}>
        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedBasketball}
            onValueChange={() => setIsCheckedTableTennis(!isCheckedBasketball)}
          />
          <Text style={styles.checkBoxLabel}>Larong Pinoy</Text>
        </View>

        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedVolleyball}
            onValueChange={() => setIsCheckedVolleyball (!isCheckedVolleyball)}
          />
          <Text style={styles.checkBoxLabel}>Volleyball</Text>
        </View>

        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedBadminton}
            onValueChange={() => setIsCheckedBadminton(!isCheckedBadminton)}
          />
          <Text style={styles.checkBoxLabel}>Badminton</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
  },
  label: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  checkBoxContainer: {
    flexDirection: 'column',
  },
  checkBoxItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxLabel: {
    marginLeft: 5,
    fontSize: 20,
  },
});

export default Forms;
