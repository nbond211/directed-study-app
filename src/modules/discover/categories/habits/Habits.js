import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Habits extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Grid>
                        <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
                        <Col style={{ backgroundColor: '#00CE9F', height: 800 }}></Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}