import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';

const FlexButton = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.btnText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#303846",
        padding: 15,
        margin: Platform.OS == 'android' ? 1 : 5,
        marginBottom: Platform.OS == 'ios' ? 1 : 5,
        borderRadius: 10
    },
    btnText: {
        color: 'white',
        fontSize: 15,
    }
})

export default FlexButton;