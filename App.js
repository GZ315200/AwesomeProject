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
  Button,
  SafeAreaView,
  StyleSheet
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import Hello from './app/test/Hello';
import Greet from './app/test/Greet';



export default App = () => {
  const [count, setCount] = useState(0);

  onPress = () => {
    setCount(count + 1)
  }

  return (
    // <Greet></Greet>
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>you checked {count} times</Text>
      <View style={styles.button}>
        <Button onPress={this.onPress} title="Press me">
        </Button>
      </View>
    </SafeAreaView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: "center"
  },
  text: {
    left: 140
  },
  button: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 10
  }
})

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });
