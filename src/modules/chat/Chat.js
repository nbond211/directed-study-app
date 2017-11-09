import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';

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
    <GiftedChat
        messages={[
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
        {
  _id: 2,
  text: 'This is a system message',
  createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
  system: true,
  // Any additional custom parameters are passed through
}
      ]}
        user={{
          _id: 1,
        }}
        listViewProps={{removeClippedSubviews: false}}
      />
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
