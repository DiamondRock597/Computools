import React from 'react'
import { Button, Text,View } from 'react-native'


export default ({navigation})=>{
    return(
        <View>
            <Text>Home Screen</Text>
            <Button  title='Go to Navigation'
             onPress={()=>navigation.openDrawer()} 
             /> 
        </View>
    )
}