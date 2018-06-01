import React from 'react';
import { View, Image, Text }from 'react-native';

import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        <Image resizeMode="contain" style={styles.containerImage} source={require('./images/Logo.png')}/>
        <Image resizeMode="contain" style={styles.logoText} source={require('./images/LogoName.png')}/>
        <Text style={styles.text}>Your easiest way to convert currency</Text>
    </View>
);

export default Logo;