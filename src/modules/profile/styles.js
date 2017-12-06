import { StyleSheet } from 'react-native';

const white = '#FFF';
const lightBlue = '#B7C6FF';
const purple ='#7875FF';
const lightPurple = '#E3E9FF';
const lightGray ='#FAFCFF';
const darkGray = '#6D6D6D';
const darkPurple = '#4C4AC8';

export default StyleSheet.create({
    header: {
        backgroundColor: purple
    },
    headerText: {
        color: white,
        fontSize: 15
    },
    container: {
        backgroundColor: lightGray
    },
    grid: {
        marginLeft: 40,
        marginRight: 26
    },
    titleRow: {
        flex: 0,
        height: 31,
        marginTop: 24,
        marginBottom: 9
    },
    title: {
        color: darkGray,
        fontSize: 23
    },
    subtitleRow: {
        flex: 0,
        height: 40,
        marginBottom: 10,
        width: 240
    },
    subtitle: {
        color: darkGray,
        fontSize: 15
    },
    optionsRow: {
        flex: 0,
        height: 62,
        marginBottom: 35
    },
    optionsSpan: {
        backgroundColor: lightPurple,
        height: 62,
        width: 254
    },
    selectedOption: {
        marginLeft: 15,
        fontSize: 18,
        color: darkGray
    },
    myChallengesRow: {
        marginBottom: 15,
        flex: 0
    },
    myChallenges: {
       fontSize: 23,
       color: darkGray
    },
    badgeContainer: {
      flex: 0,
      justifyContent: 'space-around'
    },
    emotionsBadgeImg: {
        width: 114,
        height: 114
    },
    timeBadgeImg: {
        width: 120,
        height: 120
    }
});