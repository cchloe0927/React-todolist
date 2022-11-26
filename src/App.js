import React, { useState } from 'react';
import './App.css';
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
    },
    {
      id: 2,
      title: '리액트 공부하기2',
      contents: '리액트 기초를 공부해 봅시다!',
    },
    {
      id: 3,
      title: '리액트 공부하기3',
      contents: '리액트 기초를 공부해 봅시다!',
    },
  ]);
  //todo 추가하기
  const onSaveTodo = (newTodo) => {
    const todosData = {
      ...newTodo,
      id: todos.length + 1,
    };
    setTodos([...todos, todosData]);
    console.log(todosData);
  };
  //todo 삭제하기
  const onDeleteTodo = (id) => {
    console.log(id);
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  return (
    <div className='wrap'>
      <Header />
      <AddContents onSaveTodosData={onSaveTodo} />
      <Contents todosData={todos} onDeleteTdosData={onDeleteTodo} />
    </div>
  );
}

export default App;
