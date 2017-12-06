import React from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Icon, Button } from 'native-base';
import { Column, Row, Grid } from 'react-native-easy-grid';
import SimplePicker from 'react-native-simple-picker';

import Styles from './styles';
import Text from '../../components/text';

const options = [
    'once a day',
    'three times a week',
    'once a week'
];

class Profile extends React.Component {
    constructor() {
        super();
        this.state = { selectedOption: 'once a day' }
    }

    static displayName = 'Alex';

    static navigationOptions = {
        tabBarLabel: 'Alex',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='md-person'
                size={26}
                style={{ color: tintColor }}
            />
        )
    };

    render() {
        return (
            <Container style={Styles.container}>
                <Header style={Styles.header}>
                    <Left/>
                    <Body>
                    <Text style={Styles.headerText}>Hi, Alex!</Text>
                    </Body>
                    <Right />
                </Header>
                <Grid style={Styles.grid}>
                    <Row style={Styles.titleRow}>
                        <Text style={Styles.title}>Notifications</Text>
                    </Row>
                    <Row style={Styles.subtitleRow}>
                        <Text style={Styles.subtitle}>How often do you want to participate in a challenge?</Text>
                    </Row>
                    <Row style={Styles.optionsRow}>
                        <Button
                            style={Styles.optionsSpan}
                            onPress={() => {
                                console.log('woo');
                                this.refs.picker.show();
                            }}
                        >
                            <Text style={Styles.selectedOption}>{this.state.selectedOption}</Text>
                        </Button>
                    </Row>
                </Grid>
                <SimplePicker
                    ref={'picker'}
                    options={options}
                    onSubmit={(option) => {
                        this.setState({
                            selectedOption: option,
                        });
                    }}
                />
            </Container>
        );
    }
}


export default Profile;