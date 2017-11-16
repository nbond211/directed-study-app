import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import { Container, Header, Content, Button, Text } from 'native-base';

import * as actions from './actions';
import convoData from './conversations/emotions/dare-selfie';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FBFCFF'
  },

  response: {
      alignSelf: 'auto',
      marginBottom: 10,
      backgroundColor: '#595CF6'
  }
});

const {convo} = convoData;

class Chat extends React.Component {
    static displayName = 'Chat';

    componentDidMount() {
        const { currentMessage, messageSent, sendTuttiMessage } = this.props;

        if (!messageSent) {
            const {texts} = convo[`${currentMessage}`];
            texts.forEach(text => sendTuttiMessage(text));
        }
    }

    componentWillReceiveProps(nextProps) {
        const { currentMessage, sendTuttiMessage, setOptions } = this.props;

        if (currentMessage !== nextProps.currentMessage && !nextProps.messageSent) {
            const {texts} = convo[`${nextProps.currentMessage}`];
            texts.forEach(text => sendTuttiMessage(text));
        }

        const {options} = convo[`${nextProps.currentMessage}`];
        if (options && !nextProps.awaitingReply) {
            setOptions(options);
        }
    }

    render() {
        const { messages, currentMessage, messageSent, awaitingReply, options, sendUserMessage } = this.props;

        const renderInputToolbar = () => {


            const buttons = options.toJS().map(option => {
                return (
                    <Button
                        style={styles.response}
                        rounded
                        primary
                        key={ option.text }
                        onPress={ () => sendUserMessage(option) }
                    >
                        <Text>{option.text}</Text>
                    </Button>
                );
            });

            return (
                awaitingReply &&
                <View style={styles.container}>
                    { buttons }
                </View>
            )
        };

        return (
            <GiftedChat
                messages={messages.toJS()}
                user={{
                    _id: 1,
                }}
                listViewProps={{removeClippedSubviews: false}}
                renderInputToolbar={ renderInputToolbar }
                minInputToolbarHeight={ options.size * 100 }
            />
        )
    }
}

export default connect(
  state => ({
    messages: state.chat.get('messages'),
    convoId: state.chat.get('convoId'),
    currentMessage: state.chat.get('currentMessage'),
    messageSent: state.chat.get('messageSent'),
    awaitingReply: state.chat.get('awaitingReply'),
    options: state.chat.get('options')
  }),
  dispatch => ({
    sendTuttiMessage: text => dispatch(actions.sendTuttiMessage(text)),
    sendUserMessage: text => dispatch(actions.sendUserMessage(text)),
    setCurrentMessage: id => dispatch(actions.setCurrentMessage(id)),
    setOptions: options => dispatch(actions.setOptions(options)),
    clearOptions: () => dispatch(actions.clearOptions())
  })
)(Chat);
