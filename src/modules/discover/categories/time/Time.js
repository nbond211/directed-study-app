import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, Container, Content, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Styles from './styles';

export default class Time extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Grid>
                        <Row style={Styles.row1}>
                            <Grid style={Styles.gridContainer}>
                                <Row style={Styles.timeRow}>
                                    <View style={Styles.timeTextSpan}>
                                        <Text style={Styles.timeText}>TIME</Text>
                                    </View>
                                </Row>
                                <Row style={Styles.controlRow}>
                                    <View style={Styles.controlTextSpan}>
                                        <Text style={Styles.controlText}>Do feel in control of your time?</Text>
                                    </View>
                                </Row>
                            </Grid>
                        </Row>
                        <Row style={Styles.row2}>
                            <Grid style={Styles.gridContainer}>
                                <Row style={Styles.textRow}>
                                    <Text style={Styles.grayText}>Do you feel yourself spending <Text style={Styles.purpleText}>more time</Text> than you expected to in the app?</Text>
                                </Row>
                                <Row style={Styles.textRow}>
                                    <Text style={Styles.grayText}>Apps should empower you to feel aware and in control of how much time you spend using the app.</Text>
                                </Row>
                            </Grid>
                        </Row>
                        <Row style={Styles.row3}>
                            <Grid style={Styles.gridContainer}>
                                <Row style={Styles.autoplayTitleRow}>
                                    <Text style={Styles.autoplayTitle}>Autoplay</Text>
                                </Row>
                                <Row style={Styles.autoplayImgRow}>
                                    <Image
                                        style={Styles.autoplayImg}
                                        source={require('./img/autoplay.png')}
                                    />
                                </Row>
                                <Row style={Styles.autoplayTextRow}>
                                    <Text style={Styles.grayText}>When the video <Text style={Styles.purpleText}>autoplays</Text>, the app makes the choice for you. You didn’t ask to watch the next video.</Text>
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