import { StyleSheet } from 'react-native';

const white = '#FFF';
const purple ='#7875FF';
const lightPurple = '#ABAFFC';


export default StyleSheet.create({
    header: {
        backgroundColor: purple
    },
    underline: {
        backgroundColor: white
    },
    defaultText: {
        color: lightPurple,
        fontSize: 15,
        fontFamily: 'avenir-heavy'
    },
    activeText: {
        color: white,
        fontSize: 15,
        fontFamily: 'avenir-heavy'
    }
});