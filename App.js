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

import FlexButton from './app/test/FlexButton';

export default App = () => {
  const [count, setCount] = useState(0);

  onPress = () => {
    setCount(count + 1)
  }

  return (
    // <Greet></Greet>
    <SafeAreaView style={styles.container}>
      <View style={styles.countContainer}>
        <Text>you checked {count} times</Text>
      </View>
      <View>
        <FlexButton onPress={onPress} title='Press me'/>
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
  }
})
