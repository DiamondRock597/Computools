import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addFavourite} from '../../store/actions';
import {ScrollView, View, Text, StyleSheet, Dimensions} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import AutoHeightImage from 'react-native-auto-height-image';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');

const DiscrFilmContainer = (props) => {
  const {film} = props.route.params;
  console.log(props);
  const {handleFavourite} = props;
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

  const [fav, setFav] = useState(film.favourite);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View>
          <BoxShadow setting={shadowOpt}>
            <AutoHeightImage
              width={(width - 10) / 2}
              source={{
                uri: `http://image.tmdb.org/t/p/w342${film.poster_path}`,
              }}
              style={styles.image}
            />
          </BoxShadow>
        </View>
        <View style={styles.textRatingBlock}>
          <Icon
            onPress={() => {
              handleFavourite(film.id);
              setFav(!fav);
            }}
            name={fav ? 'star' : 'star-o'}
            size={30}
            color="yellow"
          />
          <Text style={styles.textRating}>
            <Text style={styles.headerTitle}>Score:</Text>
            {'\n'} {film.vote_average}
          </Text>
          <Text style={styles.textRating}>
            <Text style={styles.headerTitle}>Rating:{'\n'}</Text>{' '}
            {film.adult ? 'R' : 'PG'}
          </Text>
          <Text style={styles.textRating}>
            <Text style={styles.headerTitle}>Release Data:</Text>
            {'\n'} {releaseData.toDateString().slice(3)}
          </Text>
        </View>
      </View>
      <View style={styles.center}>
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
  headerTitle: {
    fontWeight: '700',
  },
  center: {
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: '#898996',
    opacity: 0.9,
    height: '100%',
  },
  image: {
    borderRadius: 20,
  },
});

const mapDispatchToProps = (dispatch) => ({
  handleFavourite: (id) => dispatch(addFavourite(id)),
});

export const DiscrFilm = connect(null, mapDispatchToProps)(DiscrFilmContainer);
