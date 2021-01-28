/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform
} from 'react-native';

import FlexButton from './app/components/FlexButton';

export default App = () => {
  const [count, setCount] = useState(0);

  onPress = () => {
    setCount(count + 1)
  }
  onRefesh = () => {
    setCount(0)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.text}>you checked {count} times</Text>
      </View>
      <View>
        <FlexButton onPress={onPress} title='Press me'/>
      </View>
      <View>
        <FlexButton onPress={onRefesh} title='Refresh'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  text: {
    fontSize: 24,
    color: "#303846",
  }
})
