import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';

import * as actions from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Chat = props => {

  const { changeCategory, category } = props;

  return (
    <View style={styles.container}>
      <Text>'CHAT' {category}</Text>
      <Button
          onPress={() => changeCategory('notifications')}
          title="Notifications"
          color="#841584"
        />
        <Button
            onPress={() => changeCategory('time')}
            title="Time"
            color="#841584"
          />
    </View>
  )
};

Chat.displayName = 'Chat';

export default connect(
  state => ({
    category: state.chat.category
  }),
  dispatch => ({
    changeCategory: category => dispatch(actions.changeCategory(category))
  })
)(Chat);
