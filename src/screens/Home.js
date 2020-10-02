import React from 'react';
import {View} from 'react-native';
import {CartFilm} from '../components/componentForScreens/CartFilm';
import {HeaderHome} from '../components/componentForScreens/HeaderHome';



export const Home =  ({route,navigation}) =>{
    const {films} = route.params
    
    return(
        <View style={{backgroundColor:'#e6e6df'}}>
            <HeaderHome title={'Latest Releases'}/>
            <CartFilm navigation={navigation} films={films}/>
        </View>
    )
}








