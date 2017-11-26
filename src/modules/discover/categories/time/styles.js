import { StyleSheet } from 'react-native';

const lightBlue = '#B7C6FF';
const purple ='#7875FF';
const lightGray ='#FAFCFF';
const darkGray = '#6D6D6D';
const darkPurple = '#4C4AC8';

export default StyleSheet.create({
    // row 1 -start-
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
    // row 1 -end-

    // row 2 -start-
    row2: {
        height: 175,
        backgroundColor: lightGray
    },
    textRow: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    grayText: {
        fontSize: 15,
        color: darkGray,
        fontWeight: 'bold'
    },
    purpleText: {
        fontSize: 15,
        color: purple,
        fontWeight: 'bold'
    },
    // row 2 -end-

    // row 3 -start-
    row3: {
        height: 330,
        backgroundColor: lightBlue
    },
    autoplayTitle: {
        fontSize: 20,
        color: darkPurple,
        fontWeight: 'bold'
    },
    autoplayTitleRow: {
        flex: 0,
        marginTop: 14,
        marginBottom: 7
    },
    autoplayImg: {
        height: 171,
        width: 297
    },
    autoplayImgRow: {
        height: 171,
        flex: 0,
        marginBottom: 15
    },
    autoplayTextRow: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // row 3 -end-

    // row 4 -start-
    row4: {
        height: 93,
        backgroundColor: lightGray
    },
    queueButtonRow: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    queueButton: {
        alignSelf: 'center',
        backgroundColor: purple
    }

    // row 4 -end-
});