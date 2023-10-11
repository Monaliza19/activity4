import React, { useState } from "react";
import {View, Text, TouchableOpacity,StyleSheet} from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";


const App = () => {

  const [ showAlert, setShowAlert] = useState(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.forButtonDesign} 
      onPress={()=>{setShowAlert(!showAlert)}}>
        <Text style={styles.forTextDesign}>Click Me</Text>
      </TouchableOpacity>
      <AwesomeAlert 

      show={showAlert} 

      title="Hi! Good Day" 
      titleStyle={{fontSize: 50}}      
      />
      
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

  forButtonDesign: {
    backgroundColor:"#03A9F4",
    margin: 40,
    padding: 10,
    borderRadius: 5,
    width: 120,
    alignItems: 'center',
  },

  forTextDesign: {
    fontSize: 22,
    color: '#FFF',
  },


});

export default App