import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';

import Time from './categories/time/Time';
import Emotions from './categories/emotions/Emotions';
import Habits from './categories/habits/Habits';
import Notifications from './categories/notifications/Notifications';

import Styles from './styles';

const Discover = () => {

  return (
      <Container>
        <Header
            style={Styles.header}
            hasTabs
        />
        <Tabs
            renderTabBar={()=> <ScrollableTab />}
            tabBarUnderlineStyle={Styles.underline}
            style={Styles.header}
        >
          <Tab
              heading="TIME"
              tabStyle={Styles.header}
              activeTabStyle={Styles.header}
              textStyle={Styles.defaultText}
              activeTextStyle={Styles.activeText}
          >
            <Time />
          </Tab>
          <Tab
              heading="EMOTIONS"
              tabStyle={Styles.header}
              activeTabStyle={Styles.header}
              textStyle={Styles.defaultText}
              activeTextStyle={Styles.activeText}
          >
            <Emotions />
          </Tab>
          <Tab
              heading="HABITS"
              tabStyle={Styles.header}
              activeTabStyle={Styles.header}
              textStyle={Styles.defaultText}
              activeTextStyle={Styles.activeText}
          >
            <Habits />
          </Tab>
          <Tab
              heading="NOTIFICATIONS"
              tabStyle={Styles.header}
              activeTabStyle={Styles.header}
              textStyle={Styles.defaultText}
              activeTextStyle={Styles.activeText}
          >
            <Notifications />
          </Tab>
        </Tabs>
      </Container>
  )
};

Discover.displayName = 'Discover';

Discover.propTypes = {
  navigation: PropTypes.object.isRequired
};

Discover.navigationOptions = {
  tabBarLabel: 'Discover'
};

export default Discover;