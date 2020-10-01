import React from 'react'
import { View,StyleSheet,Text } from 'react-native'

export const HeaderHome = ()=>{
    return(
        <View style={styles.headerHome}>
                <Text style={styles.headerText}>
                    Latest Realeses
                </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    headerHome:{
        paddingLeft:30,
        paddingVertical:20,
    },
    headerText:{
        fontSize:18,
        color:'black',
        opacity:0.8
    }

})