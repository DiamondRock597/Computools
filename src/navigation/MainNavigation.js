import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeStack } from './HomeStack'
import { ActivityIndicator } from 'react-native'
import { FavouriteStack } from './FavouriteStack'

const Drawer = createDrawerNavigator()


export const MainNavigation = ({ data }) => {

    if (data.length) {
        return (

            <Drawer.Navigator initialRouteName='Home'    >
                <Drawer.Screen name='Home'
                    component={HomeStack}
                    initialParams={{ data: data }}
                />
                <Drawer.Screen name='Favourite' component={FavouriteStack} />
            </Drawer.Navigator>


        )
    } else {
        return (
            <ActivityIndicator style={{ justifyContent: 'center' }} size="large" color="#00ff00" />
        )
    }





}