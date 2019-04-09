import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/pages/HomeScreen'
import AddProductScreen from './src/pages/AddProductScreen'
import ListProductScreenTest from  './src/pages/ListProductScreenTest'
import ProductScreen from './src/pages/ProductScreen'

export default class App extends React.Component {
    render(){
        return(
            <StackNavigator />
        );
    }
}
const StackNavigator = createStackNavigator({
    Home: HomeScreen,
    Add: AddProductScreen,
    List: ListProductScreenTest,
    Product: ProductScreen
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});