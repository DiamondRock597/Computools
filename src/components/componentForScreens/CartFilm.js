import React from 'react'
import {  View,StyleSheet,TouchableOpacity } from 'react-native'
import {BoxShadow} from 'react-native-shadow'
import AutoHeightImage from 'react-native-auto-height-image';
import {FlatGrid} from 'react-native-super-grid'


export const  CartFilm = ({films,navigation}) =>{
    const shadowOpt = {
        width:183,
        height:270,
        color:"#000",
        border:8 ,
        radius:25,
        opacity:0.1,
        x:4,
        y:3,
        style:{
            marginVertical:14, 
        }
    }
    console.log(navigation)
    return(
            <View style={styles.imageBlock}>
                <FlatGrid  
                 style={{ marginTop: 10}}
                 itemDimension={130}
                 data={films}
                 spacing={10}
                 renderItem={({item})=>(
                            <TouchableOpacity onPress={()=>navigation.navigate('Discription',{film:item})} >
                                <BoxShadow setting={shadowOpt}>
                                    <AutoHeightImage   
                                        width={180} 
                                        source={{uri:`http://image.tmdb.org/t/p/w342${item.poster_path}`}}
                                        style={styles.image}
                                    />
                                </BoxShadow>
                            </TouchableOpacity>
                                
                                    
                                
                            
                 )}
                />
            </View>  
    )
}


const styles = StyleSheet.create({
    image:{
        borderRadius:20,   
        
    },
    imageBlock:{
        alignItems:'center',
        paddingBottom:134
    },
    
})