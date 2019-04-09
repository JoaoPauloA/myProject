import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

class ListProductScreen extends Component{
    static navigationOptions = {
        title: 'ListProducts'
    };
    state = {
        docs: [],
        page: 1,
        productInfo: {}
    };
    //Método que é chamado no momento em que a tela é carregada
    componentDidMount(){
        this.loadDates();
    }

    //Padrão mais fácil para trabalhar com Promisses
    // Async Await
    loadDates = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const { docs, ...productInfo } = response.data;
        //Usando SpreadOperator para pegar todo o conteúdo atual no this.state.docs e somar ao conteudo do docs
        this.setState({docs: [... this.state.docs, ... docs],
                        productInfo: productInfo,
                        page: page});
    };

    loadMore = () => {
        const { page, productInfo } = this.state;
        if(page == productInfo.pages) return;
        const pageNumber = page+1;
        this.loadDates(pageNumber);
    };
    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity
                    style={styles.productButton}
                    onPress={() => {this.props.navigation.navigate("Product", {product: item})}}>
                <Text style={styles.productButtonText}>Acessar Item</Text>
            </TouchableOpacity>
        </View>
    );
    render(){
        return(
            <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.list}
                data={this.state.docs}
                keyExtractor={item => item._id}
                renderItem={this.renderItem} 
                onEndReached={this.loadMore} //Função chamada automáticamente quando acaba a lista
                onEndReachedThreshold={0.2} //Define a quantidade em porcentagem do scrol que falta a ser rolado para carregar mais itens
                />
            </View>
        );
    }
}

export default ListProductScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    title: {
        alignItems: 'center'
    },
    list: {
        padding: 20
    },
    productContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },
    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
    productDescription: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    productButtonText: {
        fontSize: 16,
        color: "#DA552F",
        fontWeight: "bold"
    }
});