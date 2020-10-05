import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, Dimensions} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import AutoHeightImage from 'react-native-auto-height-image';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');

export const DiscrFilm = ({route}) => {
  const {film, addFavourite} = route.params;
  const shadowOpt = {
    width: (width - 10 + 2) / 2,
    height: 300,
    color: '#000',
    border: 8,
    radius: 25,
    opacity: 0.1,
    x: 4,
    y: 3,
    style: {
      marginVertical: 14,
      marginHorizontal: 20,
    },
  };

  const releaseData = new Date(film.release_date);
  const [favourite, setFavourite] = useState(false);

  return (
    <ScrollView
      style={{backgroundColor: '#898996', opacity: 0.9, height: '100%'}}>
      <View style={styles.container}>
        <View>
          <BoxShadow setting={shadowOpt}>
            <AutoHeightImage
              width={(width - 10) / 2}
              source={{
                uri: `http://image.tmdb.org/t/p/w342${film.poster_path}`,
              }}
              style={{borderRadius: 20}}
            />
          </BoxShadow>
        </View>
        <View style={styles.textRatingBlock}>
          <Icon
            onPress={() => {
              setFavourite(!favourite);
              // addFavourite(film.id);
            }}
            name={favourite ? 'star' : 'star-o'}
            size={30}
            color="yellow"
          />
          <Text style={styles.textRating}>
            <Text style={{fontWeight: '700'}}>Score:</Text>
            {'\n'} {film.vote_average}
          </Text>
          <Text style={styles.textRating}>
            <Text style={{fontWeight: '700'}}>Rating:{'\n'}</Text>{' '}
            {film.adult ? 'R' : 'PG'}
          </Text>
          <Text style={styles.textRating}>
            <Text style={{fontWeight: '700'}}>Release Data:</Text>
            {'\n'} {releaseData.toDateString().slice(3)}
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
        <View>
          <Text style={styles.name}>
            {film.original_title}({releaseData.toDateString().slice(-4)})
          </Text>
        </View>
        <View>
          <Text style={styles.overview}>{film.overview}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRatingBlock: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 5,
  },
  textRating: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: '600',
    fontFamily: 'tahoma',
  },

  name: {
    marginHorizontal: 30,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 3,
    paddingVertical: 8,
  },
  overview: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 30,
    borderBottomWidth: 0.8,
    paddingVertical: 10,
    borderTopWidth: 0.8,
    borderColor: 'gray',
  },
});
