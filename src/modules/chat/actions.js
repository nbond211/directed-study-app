import { SEND_TUTTI_MESSAGE, SEND_USER_MESSAGE, SET_CURRENT_MESSAGE, SET_OPTIONS, CLEAR_OPTIONS } from './constants';

export const sendTuttiMessage = text => {
  return {
    type: SEND_TUTTI_MESSAGE,
    payload: {
      text
    }
  }
};

export const sendUserMessage = text => {
  return {
    type: SEND_USER_MESSAGE,
    payload: {
      text
    }
  }
};

export const setCurrentMessage = id => {
  return {
    type: SET_CURRENT_MESSAGE,
    payload: {
      id
    }
  }
};

export const setOptions = options => {
  return {
    type: SET_OPTIONS,
    payload: {
      options
    }
  }
};

export const clearOptions = () => {
  return {
    type: CLEAR_OPTIONS
  }
};
