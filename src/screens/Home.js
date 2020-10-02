import React from 'react'
import {  View,StyleSheet } from 'react-native'
import {BoxShadow} from 'react-native-shadow'
import {HeaderHome} from '../components/componentForScreens/HeaderHome'
import AutoHeightImage from 'react-native-auto-height-image';
import {FlatGrid} from 'react-native-super-grid'


export const Home =  ({route}) =>{
    const {films} = route.params
    const shadowOpt = {
        width:180,
        height:270,
        color:"#000",
        border:8 ,
        radius:25,
        opacity:0.2,
        x:4,
        y:3,
        style:{
            marginVertical:10
        }
    }
    return(
        <View style={{backgroundColor:'#e6e6df'}}>
            <HeaderHome/>
            <View style={styles.imageBlock}>
                <FlatGrid  
                 itemDimension={130}
                 data={films}
                 spacing={10}
                 renderItem={({item})=>(
                    
                            <BoxShadow setting={shadowOpt} >
                                <AutoHeightImage   
                                 width={180} 
                                 source={{uri:`http://image.tmdb.org/t/p/w342${item.poster_path}`}}
                                 style={styles.image}
                                 />
                                 
                            </BoxShadow>
                   
                 )}
                />
            </View>  

        </View>
    )
}


const styles = StyleSheet.create({
    image:{
        borderRadius:25,   
    },
    imageBlock:{
        alignItems:'center'
    },
    
})






