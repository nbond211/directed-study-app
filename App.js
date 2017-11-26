import React from 'react';
import { Font } from 'expo';
import Main from './src/index.js';

export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'avenir-heavy': require('./assets/fonts/avenir-heavy.ttf'),
        });

        this.setState({fontLoaded: true});
    }

  render() {
    return (
        this.state.fontLoaded &&
      <Main/>
    );
  }
};
