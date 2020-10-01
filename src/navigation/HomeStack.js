import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {HeaderButton} from '../components/HeaderButton';
const Stack = createStackNavigator()


export class HomeStack extends React.Component {
    homeOptions = ({navigation}) => (
        {
            headerRight:() =>(
            <HeaderButton handlePress={navigation.openDrawer}/>
            )

        
        
        }
            
    )


    


    render(){
       console.log(this.props)
        return(
            <Stack.Navigator 
            screenOptions={
                {headerTitleAlign:'center',
                headerTitleStyle:{
                    color:'black',
                    fontSize:22
                },
                headerStyle:{
                    backgroundColor:'#6595e0'
                }}
            }>

                <Stack.Screen 
                 initialParams={{films:this.props.route.params.data}}
                 options={this.homeOptions} 
                 name='Home' 
                 component={Home}/>
                
            </Stack.Navigator>
        )
    }
}