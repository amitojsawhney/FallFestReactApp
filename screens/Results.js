import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {WebView,} from 'react-native'

export default class Results extends React.Component {
  static navigationOptions = {
    title: 'Results',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <WebView
            source={{uri: 'http://novafallfest.com/results'}}

          />
        )
  }
}
