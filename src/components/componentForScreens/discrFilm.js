import React from 'react';
import { Button, View,Text, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {BoxShadow} from 'react-native-shadow'
import AutoHeightImage from 'react-native-auto-height-image';
const Stack = createStackNavigator()

export const DiscrFilm = ({route})=>{
    const {film} = route.params
    const shadowOpt = {
        width:202,
        height:300,
        color:"#000",
        border:8 ,
        radius:25,
        opacity:0.1,
        x:4,
        y:3,
        style:{
            marginVertical:14,
            marginHorizontal:20
        }
    }
   
    const  releaseData = new Date(film.release_date)
    
    return(
        <View style={{backgroundColor:'#898996',opacity:0.9}}>
                <View style={styles.container}>
                   <View>
                        <BoxShadow setting={shadowOpt}>
                            <AutoHeightImage   
                            width={200} 
                            source={{uri:`http://image.tmdb.org/t/p/w342${film.poster_path}`}}
                            style={{borderRadius:20,}}
                            />
                        </BoxShadow> 
                   </View>
                    <View style={styles.textRating}>
                        <Text style={styles.text}>
                            <Text style={{fontWeight:'700'}}>Score:</Text>{'\n'} {film.vote_average}
                           
                        </Text>
                        <Text style={styles.text}>
                            <Text style={{fontWeight:'700'}}>Rating:{'\n'}</Text> {film.adult?'R':'PG'}
                        </Text>
                        <Text style={styles.text}>
                            <Text style={{fontWeight:'700'}}>Release Data:</Text>{'\n'} {releaseData.toDateString().slice(3)}
                        </Text>
                        

                    </View>
                </View>
                
         </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginVertical:30,
       
        
    },
    textRating:{
        flexDirection:'column',
        marginTop:20,
    },
    text:{
        fontSize:20,
        marginVertical:15,
        fontWeight:'600',
        fontFamily:'tahoma'
    }
})