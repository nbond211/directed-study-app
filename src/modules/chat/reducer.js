import { List, Map } from 'immutable';
import { SEND_TUTTI_MESSAGE, SEND_USER_MESSAGE, SET_OPTIONS, TUTTI, USER } from './constants';
import { createMessage } from './util';

const initialState = Map({
  messages: List(),
  convoId: '',
  currentMessage: 0,
  messageSent: false,
  awaitingReply: false,
  options: List()
});

export default function REDUCER(state = initialState, action) {
  switch (action.type) {

    case SEND_TUTTI_MESSAGE: {
        const {text} = action.payload;
        const newMessage = createMessage({user: 'tutti', text});
        const newMessages = state.get('messages').unshift(newMessage);
        return state.merge(Map({messages: newMessages, messageSent: true}));
    }

    case SEND_USER_MESSAGE: {
        const {text, linkTo} = action.payload;
        const newMessage = createMessage({user: 'user', text});
        const newMessages = state.get('messages').unshift(newMessage);
        return state.merge(Map({messages: newMessages, currentMessage: linkTo, options: List(), messageSent: false, awaitingReply: false}));
    }

    case SET_OPTIONS: {
        const {options} = action.payload;
        return state.merge(Map({options: List(options), awaitingReply: true}));
    }

    default: {
        return state;
    }
  }
}
