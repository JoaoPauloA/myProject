import {createStackNavigator} from 'react-navigation';

import Main from '../pages/main';


export default createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            alingItem:"center",
            title: 'Contador',
            headerStyle: { backgroundColor: '#4285f4' },
            headerTintColor: '#ffffff',
        },

    },

});