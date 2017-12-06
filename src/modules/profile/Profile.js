import React from 'react';
import { Container, Header, Left, Body, Right, Title, Icon } from 'native-base';
import { Column, Row, Grid } from 'react-native-easy-grid';

import Styles from './styles';
import Text from '../../components/text';

class Profile extends React.Component {
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
            <Container>
                <Header style={Styles.header}>
                    <Left/>
                    <Body>
                    <Text style={Styles.headerText}>Hi, Alex!</Text>
                    </Body>
                    <Right />
                </Header>
                <Grid>
                    <Row>
                        <Text>Notifications</Text>
                    </Row>
                    <Row>
                        <Text>How often do you want to participate in a challenge?</Text>
                    </Row>
                </Grid>
            </Container>
        );
    }
}


export default Profile;