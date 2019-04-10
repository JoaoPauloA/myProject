import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import stylepage from '../styles/style';
import { save } from '../controller/expenseController';


export default class Main extends Component {
    t(){
        save();
    }
    render() {
        return (
            <View style = {stylepage.container}>
            <Text>cjpa</Text>
            <TouchableOpacity style = {stylepage.button}><Text style={stylepage.buttonTextCommon}>teste</Text></TouchableOpacity>
            </View>

        );

    }
}
