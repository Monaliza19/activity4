import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  CustomDrawer  from './src/CustomDrawer';
import  Alert  from './pages/Alert';
import Modal from './pages/Modal';
import Tab from './pages/Tab/mainTab';
import Collapse from './pages/Collapse'
import InputText from './pages/InputText'
import Checkbox from './pages/Checkbox'
import RB from './pages/RadioBtn'
import Dropdown from './pages/Dropdown'
import Divider from './pages/Divider'
import ProgressBar from './pages/ProgressBar'
import HelperText from './pages/HelperText'
import FlatList from './pages/FlatLIist'
import ScrollView from './pages/ScrollView'
import Pressable from './pages/Pressable'
import Switch from './pages/Switch'
import RefreshControl from './pages/RefreshControl'
import TouchableHighlight from './pages/TouchableHighlight'
import TouchableOpacity from './pages/TouchableOpacity'
import Snackbar from './pages/SnackBar'
import VirtualizedList from './pages/VirtualizedList'
import Surface from './pages/Surface'











const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Component" drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Alert" component={Alert} />
        <Drawer.Screen name="Modal" component={Modal} />
        <Drawer.Screen name="Tab" component={Tab} />
        <Drawer.Screen name="Collapse" component={Collapse} />
        <Drawer.Screen name="Carousel" component={Collapse} />
        <Drawer.Screen name="InputText" component={InputText} />
        <Drawer.Screen name="Checkbox" component={Checkbox} />
        <Drawer.Screen name="RadioButton" component={RB} />
        <Drawer.Screen name="Dropdown" component={Dropdown} />
        <Drawer.Screen name="Divider" component={Divider} />
        <Drawer.Screen name="ProgressBar" component={ProgressBar} />
        <Drawer.Screen name="HelperText" component={HelperText} />
        <Drawer.Screen name="FlatList" component={FlatList} />
        <Drawer.Screen name="ScrollView" component={ScrollView} />
        <Drawer.Screen name="Pressable" component={Pressable} />
        <Drawer.Screen name="Switch" component={Switch} />
        <Drawer.Screen name="RefreshControl" component={RefreshControl} />
        <Drawer.Screen name="TouchableHighlight" component={TouchableHighlight} />
        <Drawer.Screen name="TouchableOpacity" component={TouchableOpacity} />
        <Drawer.Screen name="SnackBar" component={Snackbar} />
        <Drawer.Screen name="VirtualizedList" component={VirtualizedList} />
        <Drawer.Screen name="Surface" component={Surface} />
        

        
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  txt: {
    flex: 1,
  },
});

