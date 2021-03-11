import React, {} from 'react';
import {View, Text, StyleSheet,} from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Todo List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: 'green',
        paddingTop: 30,
    },

    text: {
        color: 'white',
        textAlign: 'center'
    }
});