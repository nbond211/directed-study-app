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

  const { messages, currentMessage, messageSent, awaitingReply, options } = props;

  return (
    <GiftedChat
        messages={[]}
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
    messages: state.chat.messages,
    convoId: state.chat.convoId,
    currentMessage: state.chat.currentMessage,
    messageSent: state.chat.messageSent,
    awaitingReply: state.chat.awaitingReply,
    options: state.chat.options
  }),
  dispatch => ({
    sendTuttiMessage: text => dispatch(actions.sendTuttiMessage(text)),
    sendUserMessage: text => dispatch(actions.sendUserMessage(text)),
    setCurrentMessage: id => dispatch(actions.setCurrentMessage(id)),
    setOptions: options => dispatch(actions.setOptions(options)),
    clearOptions: () => dispatch(actions.clearOptions())
  })
)(Chat);
