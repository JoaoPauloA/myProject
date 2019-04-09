import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../styles/Style'

class HomeScreen extends Component{
    static navigationOptions = {
        title: 'Home'
    };
    render(){
        return(
            <View style={styles.containerHome}>
            <Text>Home Page</Text>
            <Button title="Adicionar Produto" onPress={() => this.props.navigation.navigate('Add')} />
            <Button title="Listar Produtos" onPress={() => this.props.navigation.navigate('List')} />
            </View>
        );
    }
}

export default HomeScreen;