import shortid from 'shortid';
import { TUTTI, USER } from './constants';

const users = {
  tutti: TUTTI,
  user: USER
};

export function createMessage({user, text}) {
  const userObj = users[user]; //tutti or user

  return {
    _id: shortid.generate(),
    text,
    createdAt: new Date(),
    user: userObj
  };
}
