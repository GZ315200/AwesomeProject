/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from 'react-native';

import FlexButton from './app/components/FlexButton';

export default App = () => {
  const [count, setCount] = useState(0);
  const [login, setLogin] = useState("未登陆");

  onPress = () => {
    setCount(count + 1)
    setLogin("登陆成功!")
  }
  onRefesh = () => {
    setCount(0)
    setLogin("注册成功!")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        {/* <Text style={styles.text}>you checked {count} times</Text> */}
        <Text style={styles.text}>{login}</Text>
        <Text style={styles.text}>成功 +{count}次</Text>
      </View>
      <View style={styles.aiContainer}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
      <View style={styles.btnContainer}>
        <View>
          <FlexButton onPress={onPress} title='登陆' />
        </View>
        <View>
          <FlexButton onPress={onRefesh} title='注册' />
        </View>
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  textContainer: {
    flex: 2,
    backgroundColor: '#6784AF',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 3,
    backgroundColor: '#A2DAE0',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  aiContainer: {
    flex: 1,
    backgroundColor: '#A2DAE0',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  text: {
    fontSize: 24,
    color: "#303846",
  }
})
