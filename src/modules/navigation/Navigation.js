import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import discoverScreen from '../discover/Discover';
import chatScreen from '../chat/Chat';

const white = '#FFF';
const purple ='#7875FF';
const lightPurple = '#ABAFFC';

export const AppNavigator = TabNavigator({
  Discover: { screen: discoverScreen },
  Chat: { screen: chatScreen }
},
    {
      tabBarOptions: {
          activeTintColor: white,
          inactiveTintColor: lightPurple,
          activeBackgroundColor: purple,
          inactiveBackgroundColor: purple
    }});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.navigation
});

export default connect(mapStateToProps)(AppWithNavigationState);
