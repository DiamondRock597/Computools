import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Favourite} from '../screens/Favourite'
import {HeaderButton} from '../components/HeaderButton'
const Stack = createStackNavigator()


export class FavouriteStack extends React.Component {
    favouriteOptions = ({navigation}) => (
        {
            headerRight: ()=> (
             <HeaderButton handlePress={navigation.openDrawer}/>
            )
        })


    


    render(){
        return(
            <Stack.Navigator >
                <Stack.Screen 
                 options={this.favouriteOptions} 
                 name='Favourite' 
                 component={Favourite}/>

            </Stack.Navigator>
        )
    }
}