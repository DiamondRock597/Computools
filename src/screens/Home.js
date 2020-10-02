import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Cart } from "../components/componentForScreens/Cart";
import { HeaderHome } from '../components/componentForScreens/HeaderHome'

export const Home = ({ route, navigation }) => {
    const { films } = route.params

    return (
        <SafeAreaView style={{ backgroundColor: '#e6e6df', flex: 1 }}>
            <FlatGrid
                ListHeaderComponent={HeaderHome}
                contentContainerStyle={styles.imageBlock}
                itemDimension={130}
                data={films}
                spacing={10}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Cart item={item} navigation={navigation} />
                )}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    imageBlock: {
        alignItems: 'center',
    },
})







