import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeStack} from './HomeStack';

import {FavouriteStack} from './FavouriteStack';

const Drawer = createDrawerNavigator();

export const MainNavigation = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="Favourite" component={FavouriteStack} />
  </Drawer.Navigator>
);