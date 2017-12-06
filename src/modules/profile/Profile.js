import React from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, Icon } from 'native-base';

import Styles from './styles';
import Text from '../../components/text';

const Profile = () => {

    return (
        <Container>
            <Text>Profile</Text>
        </Container>
    )
};

Profile.displayName = 'Alex';

Profile.navigationOptions = {
    tabBarLabel: 'Alex',
    tabBarIcon: ({ tintColor }) => (
        <Icon
            name='md-person'
            size={26}
            style={{ color: tintColor }}
        />
    )
};

export default Profile;