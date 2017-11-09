import { NavigationActions } from 'react-navigation';
import { AppNavigator } from './Navigation';

let initialNavState = AppNavigator.router.getStateForAction(NavigationActions.init());
const firstAction = AppNavigator.router.getActionForPathAndParams('Discover');
initialNavState = AppNavigator.router.getStateForAction(firstAction, initialNavState);

export default function REDUCER(state = initialNavState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
