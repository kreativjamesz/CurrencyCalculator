import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';

EStyleSheet.build({
    $primaryBlue: '#2c3e50',
    $white: '#ffffff',
});

const Navigation = StackNavigator({
    Home: {
        screen: Home,
    },
    
})
//export default () => <Home />