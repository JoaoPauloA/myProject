import {createStackNavigator} from 'react-navigation';

import Main from '../pages/main';


export default createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            alingItem:"center",
            title: 'Contador',
            headerStyle: { backgroundColor: '#23292e' },
            headerTintColor: '#ffffff',
        },

    },

});