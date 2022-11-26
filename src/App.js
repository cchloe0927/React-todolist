import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
//component
import Header from './components/Header';
import AddContents from './components/AddContents';
import Contents from './components/Contents';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '리액트 공부하기1',
      contents: '리액트 기초를 공부해 봅시다!',
      progress: true,
    },
  ]);

  //todo 추가하기
  const onSaveTodo = (newTodo) => {
    const todosData = {
      ...newTodo,
      id: uuidv4(),
      progress: true,
    };
    setTodos([...todos, todosData]);
    //console.log('todosData: ', todosData);
  };
  //todo 삭제하기
  const onDeleteTodo = (id) => {
    //console.log(id);
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };
  //todo 상태값 변경하기
  const onProgressTodo = (id, progress) => {
    //console.log(id);
    const todos_index = todos.findIndex((todo) => todo.id === id); //조건이 충족하는 인덱스 번호를 구함
    console.log('todos_index: ', todos_index);
    progress
      ? (todos[todos_index].progress = false)
      : (todos[todos_index].progress = true);
    setTodos([...todos]);
  };

  return (
    <div className='wrap'>
      <Header />
      <AddContents onSaveTodosData={onSaveTodo} />
      <Contents
        todosData={todos}
        onDeleteTdosData={onDeleteTodo}
        onProgressState={onProgressTodo}
      />
    </div>
  );
}

export default App;
