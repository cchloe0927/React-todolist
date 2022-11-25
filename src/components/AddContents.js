import React from 'react';
import classes from './AddContents.module.css';

const AddContents = () => {
  return (
    <form className={classes.add}>
      <div className={classes.contents}>
        <label for='title'>제목</label>
        <input id='title' type='text'></input>
        <label for='contents'>내용</label>
        <input id='contents' type='text'></input>
      </div>
      <button className={classes.addBtn}>추가하기</button>
    </form>
  );
};

export default AddContents;
