import React from 'react';
import {Cart} from '../components/componentForScreens/Cart';
import {connect} from 'react-redux';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

const Favourite = ({films, navigation}) => (
  <SafeAreaView style={styles.safeArea}>
    <FlatGrid
      itemDimension={130}
      data={films}
      spacing={10}
      ListEmptyComponent={
        <View>
          <Text>Please add your favourite films...</Text>
        </View>
      }
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Cart item={item} navigation={navigation} />}
    />
  </SafeAreaView>
);

const mapStateToProps = (state) => ({films: state.data.favouriteFilms});

export default connect(mapStateToProps, null)(Favourite);

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#e6e6df',
    flex: 1,
  },
});
