import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../styles/Style'

class AddProductScreen extends Component{
    static navigationOptions = {
        title: 'AddProduct'
    };
    render(){
        return(
            <View style={styles.containerHome}>
            <Text>Add Product Page</Text>
            <Button title="Página Inicial" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}

export default AddProductScreen;