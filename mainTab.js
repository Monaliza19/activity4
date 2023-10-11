import * as React from 'react';
import {View, Text} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from './Screen/Home'
import Settings from './Screen/Settings'
import Details from './Screen/Details'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const homeName = 'Home';
const detailName = 'Details';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function mainTab(){
  return (
    <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused , color , size }) =>{
        let iconName;
        let rn = route.name;

        if(rn === homeName){
          iconName= focused ? 'home' : 'home-outline';
        }else if(rn === detailName){
          iconName= focused ? 'list' : 'list-outline';
        }else if (rn === settingsName){
          iconName= focused? 'settings': 'settings-outline';
        }

        return <Ionicons name={iconName} size={size} color={color}/>
      },
    })}
    tabBarOptions={{
      activeTintColor:'blue',
      inactiveTintColor:'gray',
      labelStyles: {paddingBottom: 10, fontSize: 10},
      style: {padding: 10, height: 70}
    }}>
      

      <Tab.Screen name={homeName} component={Home}/>
      <Tab.Screen name={detailName} component={Details}/>
      <Tab.Screen name={settingsName} component={Settings}/>

    </Tab.Navigator>
  )
}