import React, {Component} from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Produto from '../objects/Produto';
import styles from '../styles/Style'

var db = openDatabase({ name: 'sqlite.db', createFromLocation: 1 });

class ListProductScreenTest extends Component{
    static navigationOptions = {
        title: 'ListProductsTest'
    };
    state = {
        produtos: []
    };
    //Método que é chamado no momento em que a tela é carregada
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = () => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM produto', [], (tx, results) => {
                let size = results.rows.length
                let produtos = [];
                for(let i = 0; i < size; i++){
                    let prod = new Produto(results.rows.item(i).id,results.rows.item(i).nome,results.rows.item(i).descricao,results.rows.item(i).preco);
                    produtos.push(prod);
                }
                this.setState({produtos: produtos});
            })
        })
    }

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.nome}</Text>
            <Text style={styles.productPrice}>R${item.preco}</Text>
            <Text style={styles.productDescription}>{item.descricao}</Text>
        </View>
    );
    render(){
        return(
            <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.list}
                data={this.state.produtos}
                keyExtractor={item => item.id}
                renderItem={this.renderItem}
                />
            </View>
        );
    }
}

export default ListProductScreenTest;