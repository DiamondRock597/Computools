

import React from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer } from '@react-navigation/native';
import {  StyleSheet} from 'react-native';
import {MainNavigation} from './src/navigation/MainNavigation'






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
    
    return(
      <NavigationContainer initialParams={{data:this.state.films}}>
        <MainNavigation 
         data={this.state.isLoading?[]:this.state.films}
        />
      </NavigationContainer>
        

      
    )
}};

const styles = StyleSheet.create({
  
});

export default App;
