import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, Container, Content } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';

import Text from '../../../../components/text';
import Styles from './styles';

export default class Notifications extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Grid>
                        <Row style={Styles.row1}>
                            <Grid style={Styles.gridContainer}>
                                <Row style={Styles.titleRow}>
                                    <View style={Styles.titleTextSpan}>
                                        <Text style={Styles.titleText}>Notifications</Text>
                                    </View>
                                </Row>
                                <Row style={Styles.questionRow}>
                                    <View style={Styles.questionTextSpan}>
                                        <Text style={Styles.questionText}>How intrusive is your phone?</Text>
                                    </View>
                                </Row>
                            </Grid>
                        </Row>
                        <Row style={Styles.row2}>
                            <Grid style={Styles.gridContainer}>
                                <Row style={Styles.textRow}>
                                    <Text style={Styles.grayText}>Often apps can pop into your life when you aren’t trying to use them through notifications.</Text>
                                </Row>
                                <Row style={Styles.textRow}>
                                    <Text style={Styles.grayText}>Pop up notifications may make you feel <Text style={Styles.purpleText}>obligated</Text> to use your phone.</Text>
                                </Row>
                            </Grid>
                        </Row>
                        <Row style={Styles.row3}>
                            <Grid style={Styles.gridContainer}>
                                <Row style={Styles.sectionTitleRow}>
                                    <Text style={Styles.sectionTitle}>Notifications</Text>
                                </Row>
                                <Row style={Styles.notificationsImgRow}>
                                    <Image
                                        style={Styles.notificationsImg}
                                        source={require('./img/notifications.png')}
                                    />
                                </Row>
                                <Row style={Styles.notificationsTextRow}>
                                    <Text style={Styles.grayText}>Depending on your settings, you may be constantly pulled away from your life to check the notifications on your phone.</Text>
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