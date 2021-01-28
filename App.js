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
  TouchableOpacity,
  Platform
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
      <View style={styles.countContainer}>
        <Text>you checked {count} times</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.btnText}>Press Here</Text>
        </TouchableOpacity>
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
  button: {
    alignItems: "center",
    backgroundColor: "#303846",
    padding: 10,
    margin: Platform.OS == 'android' ? 2 : 10,
    marginBottom: Platform.OS == 'ios' ? 10 : 5,
    borderRadius: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  btnText: {
    color: 'white',
    fontSize: 15,

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
