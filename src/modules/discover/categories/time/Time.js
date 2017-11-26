import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Text } from 'native-base';
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
                    </Grid>
                </Content>
            </Container>
        );
    }
}