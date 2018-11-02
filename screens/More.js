import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView,
} from 'react-native';

export default class More extends React.Component {
  static navigationOptions = {
    title: 'More',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <WebView
            source={{uri: 'http://novafallfest.com/more'}}

          />
    )
  }
}
