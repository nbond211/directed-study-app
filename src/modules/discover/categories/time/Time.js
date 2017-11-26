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
                    </Grid>
                </Content>
            </Container>
        );
    }
}