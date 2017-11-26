import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import { connect } from 'react-redux';

import * as actions from './actions';
import Time from './categories/time/Time';
import Emotions from './categories/emotions/Emotions';
import Habits from './categories/habits/Habits';
import Notifications from './categories/notifications/Notifications';

const Discover = props => {

  const { changeCategory, category } = props;

  return (
      <Container>
        <Header hasTabs/>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="TIME">
            <Time />
          </Tab>
          <Tab heading="EMOTIONS">
            <Emotions />
          </Tab>
          <Tab heading="HABITS">
            <Habits />
          </Tab>
          <Tab heading="NOTIFICATIONS">
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

export default connect(
  state => ({
    category: state.discover.category
  }),
  dispatch => ({
    changeCategory: category => dispatch(actions.changeCategory(category))
  })
)(Discover);
