import React from 'react'
import { Button, Text,View,StyleSheet,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {HeaderHome} from '../components/componentForScreens/HeaderHome'
import AutoHeightImage from 'react-native-auto-height-image';

export const Home = ({route}) =>{
    const {films} = route.params
    
    return(
        <ScrollView>
            <HeaderHome/>
            <View style={styles.imageBlock}>
                {films.map(film=>{
                    return(
                        <View key={film.id}>
                           <AutoHeightImage 
                           width={200} 
                           source={{uri:`http://image.tmdb.org/t/p/w342${film.poster_path}`}}/>
                            
                        </View>
                    )
                })}
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    image:{
        resizeMode:'center'
    },
    imageBlock:{
        alignItems:'center'
    }
})






