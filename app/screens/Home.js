import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Splash } from '../components/Splash';

export default class Home extends Component {

    render(){
        return(
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Splash/>
            </Container>
        );
    }
    
}

// export default () => (
//     <Container>
//         <StatusBar translucent={false} barStyle="light-content" />
//         <Splash/>
//     </Container>
// );