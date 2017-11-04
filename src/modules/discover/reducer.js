import { CHANGE_CATEGORY } from './constants';

const initialState = {
  category: 'time'
}

export default function REDUCER(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      const {category} = action.payload
      return {category};
    default:
      return state;
  }
}
