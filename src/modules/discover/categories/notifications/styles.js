import { StyleSheet } from 'react-native';

const lightBlue = '#B7C6FF';
const purple ='#7875FF';
const lightPurple = '#E3E9FF';
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
    titleRow: {
        marginTop: 70,
        marginBottom: 5,
        height: 27,
        flex: 0
    },
    questionRow: {
        marginBottom: 17,
        height: 71,
        flex: 0
    },
    titleTextSpan: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightGray,
        height: 27,
        width: 107
    },
    titleText: {
        color: purple,
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'avenir-heavy'
    },
    questionTextSpan: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: lightGray,
        height: 71,
        width: 241
    },
    questionText: {
        color: purple,
        fontWeight: 'bold',
        fontSize: 23,
        fontFamily: 'avenir-heavy',
        marginLeft: 10
    },
    // row 1 -end-

    // row 2 -start-
    row2: {
        height: 191,
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
        height: 297,
        backgroundColor: lightPurple
    },
    sectionTitle: {
        fontSize: 20,
        color: darkPurple,
        fontWeight: 'bold'
    },
    sectionTitleRow: {
        flex: 0,
        marginTop: 14,
        marginBottom: 12
    },
    notificationsImg: {
        height: 115,
        width: 266
    },
    notificationsImgRow: {
        height: 115,
        flex: 0,
        marginBottom: 15
    },
    notificationsTextRow: {
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