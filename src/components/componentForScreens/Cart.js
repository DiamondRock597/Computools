import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import AutoHeightImage from 'react-native-auto-height-image';

const {width} = Dimensions.get('window');
const shadowOpt = {
  width: (width - 40) / 2,
  height: 275,
  color: '#000',
  border: 8,
  radius: 25,
  opacity: 0.1,
  x: 3,
  y: 4,
  style: {
    marginVertical: 14,
  },
};

export const Cart = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Discription', {
          film: item,
        })
      }>
      <BoxShadow setting={shadowOpt}>
        <AutoHeightImage
          width={(width - 42) / 2}
          source={{uri: `http://image.tmdb.org/t/p/w342${item.poster_path}`}}
          style={styles.image}
        />
      </BoxShadow>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
  },
  imageBlock: {
    alignItems: 'center',
  },
});
