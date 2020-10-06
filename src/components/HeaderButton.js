import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const HeaderButton = ({handlePress}) => (
  <FontAwesome5
    style={styles.icon}
    name="bars"
    size={25}
    onPress={handlePress}
    color="white"
  />
);

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },
});
