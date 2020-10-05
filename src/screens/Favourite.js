import React from 'react';
import {Cart} from '../components/componentForScreens/Cart'
import {connect} from 'react-redux';
import {SafeAreaView, View, Text} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

const Favourite = ({films,navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#e6e6df', flex: 1}}>
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
};

const mapStateToProps = (state) => {
  return {
    films: state.data.favouriteFilms,
  };
};

const mapDispatchToProps = (dispatch)=>{
  return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(Favourite);
