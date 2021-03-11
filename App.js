import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';


export default function App() {
  const [todo, setTodo] = useState([
    {text: 'Coke', key: 1,},
    {text: 'Fanta', key: 2,},
    {text: 'Sprite', key: 3,},
    {text: 'Malt', key: 4,},
    {text: 'Schwepps', key: 5,},
  ]);

  // Delete function
  const deleteTodo = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key);
    })
  }

  // Add a Todo
  const addTodoFunc = (value) => {
    if(value.length > 3){
      setTodo((prevTodo) => {
        return [
          ...prevTodo,
          {text: value, key: Math.random()}
        ];
      })
    }else{
      Alert.alert('Error', 'Please enter at least 4 characters.', [
        {text: 'Close', onPress: () => { console.log('alert is closed') }}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {  Keyboard.dismiss() }}>
      <View style={styles.container}>
        {/* Header */}
        <Header/>

        {/* content */}
        <AddTodo add={addTodoFunc}/>

        {/* List */}
        <FlatList 
          data={todo}
          renderItem={({ item }) => (
            <TodoItem item={item} key={item.key} deleteTodo={deleteTodo} />
          )}
        />

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
