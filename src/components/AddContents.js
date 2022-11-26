import React, { useState } from 'react';
import classes from './AddContents.module.css';

const AddContents = (props) => {
  const [title, setTeitle] = useState('');
  const [contents, setContents] = useState('');

  //title input 값 추출
  const onChangeHandleTitle = (event) => {
    //console.log(event.target.value);
    setTeitle(event.target.value);
  };
  //contents input 값 추출
  const onChangeHandleContents = (event) => {
    //console.log(event.target.value);
    setContents(event.target.value);
  };
  //form태그 새로고침 막기
  const addTodoHandler = (event) => {
    event.preventDefault();

    //추가 버튼 클릭 시, 새로운 Todo 카드 생성
    const newTodo = {
      title: title,
      contents: contents,
    };
    props.onSaveTodosData(newTodo);
    //저장 후 input 내용 빈 값 처리
    setTeitle('');
    setContents('');
  };

  return (
    <form className={classes.add}>
      <div className={classes.contents}>
        <label htmlFor='title'>제목</label>
        <input
          id='title'
          type='text'
          onChange={onChangeHandleTitle}
          value={title}
        ></input>
        <label htmlFor='contents'>내용</label>
        <input
          id='contents'
          type='text'
          onChange={onChangeHandleContents}
          value={contents}
        ></input>
      </div>
      <button className={classes.addBtn} onClick={addTodoHandler}>
        추가하기
      </button>
    </form>
  );
};

export default AddContents;
