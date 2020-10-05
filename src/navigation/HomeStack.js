import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import {HeaderButton} from '../components/HeaderButton';
import {DiscrFilm} from '../components/componentForScreens/discrFilm';

const Stack = createStackNavigator();

export class HomeStack extends React.Component {
  homeOptions = ({navigation}) => ({
    headerRight: () => <HeaderButton handlePress={navigation.openDrawer} />,
  });
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontSize: 24,
          },
          headerStyle: {
            backgroundColor: '#6d6d82',
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen options={this.homeOptions} name="Home" component={Home} />
        <Stack.Screen name="Discription" component={DiscrFilm} />
      </Stack.Navigator>
    );
  }
}
