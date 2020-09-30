

import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeScreen from './screens/HomeScreens'
import NavigationScreen from './screens/NavigationScreen'


const Drawer = createDrawerNavigator()



class App  extends React.Component  {
  state={
    films:[],
    isLoading:true
  }
  componentDidMount(){
    fetch(
      'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c')
      .then(responce=>responce.json())
      .then(data=>this.setState({films:data.results}))
      .finally(()=>this.setState({isLoading:false}))
  }

  
  render() {
    
    return (
        <>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
           
             <Drawer.Screen 
             name="Home" 
             component={HomeScreen} />

             <Drawer.Screen 
             name="Navigation" 
             component={NavigationScreen} />

            </Drawer.Navigator>
          </NavigationContainer>
        </>
    )
  }
};

const styles = StyleSheet.create({
  
});

export default App;
