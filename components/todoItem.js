import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, deleteTodo }) {
    return (
        <TouchableOpacity style={styles.toucha} onPress={ () => deleteTodo(item.key) }>
            <MaterialIcons name='delete' size = '18' color = 'grey'/>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    toucha: {
        padding: 10,
        margin: 8,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 7,
        borderStyle: 'dashed'
    },

    text: {
        paddingLeft: 6
    }
});