import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HelloApp = () => {
    return (
        <View style={styles.helloStyle}>
            <Text>hello, world</Text>
        </View>
    );
}
export default HelloApp;



/**
 * css style
 */
const styles = StyleSheet.create({
    helloStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }
})