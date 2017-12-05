import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, Container, Content } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';

import Text from '../../../../components/text';
import Styles from './styles';

export default class Habits extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Grid>
                        <Row style={Styles.row1}>
                            <Grid style={Styles.gridContainer}>
                                <Row style={Styles.titleRow}>
                                    <View style={Styles.titleTextSpan}>
                                        <Text style={Styles.titleText}>Habits</Text>
                                    </View>
                                </Row>
                                <Row style={Styles.questionRow}>
                                    <View style={Styles.questionTextSpan}>
                                        <Text style={Styles.questionText}>Are you forming habits?</Text>
                                    </View>
                                </Row>
                            </Grid>
                        </Row>
                        <Row style={Styles.row2}>
                            <Grid style={Styles.gridContainer}>
                                <Row style={Styles.textRow}>
                                    <Text style={Styles.grayText}>Many users find themselves taking out their phones without thinking about it or using an app at a certain time every day.</Text>
                                </Row>
                                <Row style={Styles.textRow}>
                                    <Text style={Styles.grayText}>Apps can influence you to <Text style={Styles.purpleText}>form habits</Text> that you are often unaware of. Are you okay with these new lifestyle habits?</Text>
                                </Row>
                            </Grid>
                        </Row>
                        <Row style={Styles.row3}>
                            <Grid style={Styles.gridContainer}>
                                <Row style={Styles.sectionTitleRow}>
                                    <Text style={Styles.sectionTitle}>Manual Refresh</Text>
                                </Row>
                                <Row style={Styles.manualRefreshImgRow}>
                                    <Image
                                        style={Styles.manualRefreshImg}
                                        source={require('./img/manual-refresh.png')}
                                    />
                                </Row>
                                <Row style={Styles.manualRefreshTextRow}>
                                    <Text style={Styles.grayText}>When you refresh your newsfeed, are you actively looking for new content, or are you passively doing it out of habit?</Text>
                                </Row>
                            </Grid>
                        </Row>
                        <Row style={Styles.row4}>
                            <Grid style={Styles.gridContainer}>
                                <Row style={Styles.queueButtonRow}>
                                    <Button
                                        rounded
                                        style={Styles.queueButton}
                                    >
                                        <Text>Queue a challenge for tomorrow</Text>
                                    </Button>
                                </Row>
                            </Grid>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}