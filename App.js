import React, { Component } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Drawerpage from './Screens/Drawerpage.component';
import SplashScreen from './Screens/SplashScreen';
import sDrawer from './Screens/Drawer';
import HomeScreen from './Screens/Home';

/*export default function App() {
  return (
    <View >
      <SplashScreen/>
    </View>
  );
}*/

import {  createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const Navigation = createStackNavigator(

  {
    SplashScreen:{
      screen:SplashScreen,
      navigationOptions:{
        headerShown : null
      }
    },
    sDrawer:{
      screen:sDrawer,
      navigationOptions:{
        headerShown : 'true'
      }
    },
    HomeScreen:{
      screen:HomeScreen,
      navigationOptions:{
        headerShown : 'true'
      }
    },
   
  },
  {
    initialRouteName:'HomeScreen'
  }

)

const Appcontainer=createAppContainer(Navigation);
export default  class App extends React.Component {

  render() {
    return (
      <Appcontainer/>
    )
  }
}



/*import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          //name="Drawer"
          component={SplashScreen}
          //options={{ title: 'Welcome' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};*/