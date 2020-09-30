import React from 'react'
import { Button, Text,View } from 'react-native'
import Header from '../components/Header'

export default ({navigation})=>{
    return(
        <View>
            <Header handleOpen={()=>navigation.openDrawer()} title='Home'/>
        </View>
    )
}