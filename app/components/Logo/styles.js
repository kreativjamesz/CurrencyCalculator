import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth,
        paddingBottom: 0,
    },
    logoText: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        marginTop: -20
    },
    text: {
        textAlign: 'center',
        alignItems: 'center',
        color: '$white',
        fontWeight: '100',
        fontSize: 12,
        letterSpacing: -0.5,
        marginTop: -25
    }
});