import { StyleSheet } from 'react-native';

const lightBlue = '#B7C6FF';
const purple ='#7875FF';
const lightGray ='#FAFCFF';

export default StyleSheet.create({
    row1: {
        backgroundColor: lightBlue,
        height: 216
    },
    gridContainer: {
        paddingLeft: 40,
        paddingRight: 40
    },
    timeRow: {
        marginTop: 90,
        marginBottom: 5,
        height: 27,
        flex: 0
    },
    controlRow: {
        marginBottom: 22,
        height: 72,
        flex: 0
    },
    timeTextSpan: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightGray,
        height: 27,
        width: 53
    },
    timeText: {
        color: purple,
        fontWeight: 'bold',
        fontSize: 15
    },
    controlTextSpan: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightGray,
        height: 72,
        width: 241
    },
    controlText: {
        color: purple,
        fontWeight: 'bold',
        fontSize: 23
    },
});