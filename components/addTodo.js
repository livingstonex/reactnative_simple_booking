import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, TouchableOpacity} from 'react-native';

export default function AddTodo({ add }) {
    const [text, setText] = useState('');


    const onChangeText = (val) => {
        console.log(val)
        setText(val)
      }

    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder = 'Enter Todo'
            onChangeText={onChangeText}
            />

            <Button title="Add Todo" onPress={ () => add(text) }/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },

    input: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "black",
        padding: 6,
        borderRadius: 4
      }
});