import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, Container, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Text from '../../../../components/text';
import Styles from './styles';

export default class Emotions extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Grid>
                        <Row style={Styles.row1}>
                            <Grid style={Styles.gridContainer}>
                                <Row style={Styles.emotionsRow}>
                                    <View style={Styles.emotionsTextSpan}>
                                        <Text style={Styles.emotionsText}>Emotions</Text>
                                    </View>
                                </Row>
                                <Row style={Styles.questionRow}>
                                    <View style={Styles.questionTextSpan}>
                                        <Text style={Styles.questionText}>Do your emotions change while using your phone?</Text>
                                    </View>
                                </Row>
                            </Grid>
                        </Row>
                        <Row style={Styles.row2}>
                            <Grid style={Styles.gridContainer}>
                                <Row style={Styles.textRow}>
                                    <Text style={Styles.grayText}>Apps can affect your self-esteem and confidence by <Text style={Styles.purpleText}>exploiting</Text> their users. They will find out your cravings or needs and manipulate you.</Text>
                                </Row>
                                <Row style={Styles.textRow}>
                                    <Text style={Styles.grayText}>Apps may shape your perception of yourself, boost your confidence, or ruin your mood. Going on an app for a few minutes shouldn’t affect your emotions, but many do.</Text>
                                </Row>
                            </Grid>
                        </Row>
                        <Row style={Styles.row3}>
                            <Grid style={Styles.gridContainer}>
                                <Row style={Styles.sectionTitleRow}>
                                    <Text style={Styles.sectionTitle}>Likes</Text>
                                </Row>
                                <Row style={Styles.likesImgRow}>
                                    <Image
                                        style={Styles.likesImg}
                                        source={require('./img/likes.png')}
                                    />
                                </Row>
                                <Row style={Styles.likesTextRow}>
                                    <Text style={Styles.grayText}>Having followers giving you likes and comments drives your need to stay on the app to make the numbers go up.</Text>
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