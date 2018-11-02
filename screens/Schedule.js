import React from 'react';
import { ScrollView, StyleSheet,WebView, } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class Schedule extends React.Component {
  static navigationOptions = {
    title: 'Schedule',
  };

  render() {
    return (
      <WebView
            source={{uri: 'http://novafallfest.com/schedule'}}

          />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
