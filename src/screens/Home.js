import React from 'react';
import {SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {Cart} from '../components/componentForScreens/Cart';
import {HeaderHome} from '../components/componentForScreens/HeaderHome';
import {connect} from 'react-redux';
import {getData, addFavourite} from '../store/actions/index';
class Home extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  renderList = () => {
    const {films} = this.props;

    const {navigation} = this.props;
    return (
      <SafeAreaView style={{backgroundColor: '#e6e6df', flex: 1}}>
        <FlatGrid
          ListHeaderComponent={HeaderHome}
          contentContainerStyle={styles.imageBlock}
          itemDimension={130}
          data={films}
          spacing={10}
          ListEmptyComponent={
            <ActivityIndicator
              style={{justifyContent: 'center'}}
              size="large"
              color="#00ff00"
            />
          }
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Cart item={item} navigation={navigation} />}
        />
      </SafeAreaView>
    );
  };

  render() {
    return this.renderList();
  }
}

const styles = StyleSheet.create({
  imageBlock: {
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    films: state.data.films,
    favouriteFilms: state.data.favouriteFilms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
    addFavourite: (id) => dispatch(addFavourite(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
