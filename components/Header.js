import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default (props)=>{
    return(
        <View style={styles.blockHeader}>
            <View  style={styles.iconMenu}>
                <FontAwesome5  
                 name={'bars'} 
                 size={20} 
                 onPress={props.handleOpen} />
            </View>
            
            <View >
                <Text style={styles.titleMenu} >
                    {props.title}
                </Text>
            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    blockHeader:{
        paddingVertical:20,
        backgroundColor:'#4178d1',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'

    },
    iconMenu:{
        marginLeft:15
        
    },
    titleMenu:{
        marginLeft:30,
        fontSize:19
        
    }

})