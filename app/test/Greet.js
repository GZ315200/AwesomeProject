import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    }
})

const Greeting = (props) => {
    return (
        <View style={styles.center}>
            <Text>hello, {props.name}</Text>
        </View>
    );
}

const LastOfGreeting = () => {
    return (
        <View style={[styles.center, {top: 200}]}> 
            <Greeting name="zed"></Greeting>
            <Greeting name="zean"></Greeting>
            <Greeting name="abc"></Greeting>
        </View>
    );
}

export default LastOfGreeting;