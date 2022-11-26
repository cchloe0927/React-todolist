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

  return (
    <div className='wrap'>
      <Header />
      <AddContents />
      <Contents todosData={todos} />
    </div>
  );
}

export default App;
