import React from 'react';
import classes from './Contents.module.css';

const Contents = () => {
  return (
    <div className={classes.contents}>
      {/* working */}
      <section>
        <h2>Working 🔥</h2>
        <div className={classes.contents_box}>
          <div className={classes.contents_card}>
            <h2 className={classes.contents_title}>리액트 공부하기</h2>
            <p className={classes.contents_text}>리액트 기초를 공부해봅시다.</p>
            <div className={classes.btn}>
              <button className={classes.deleteBtn}>삭제하기</button>
              <button className={classes.doneBtn}>완료</button>
            </div>
          </div>
          <div className={classes.contents_card}>
            <h2 className={classes.contents_title}>리액트 공부하기</h2>
            <p className={classes.contents_text}>리액트 기초를 공부해봅시다.</p>
            <div className={classes.btn}>
              <button className={classes.deleteBtn}>삭제하기</button>
              <button className={classes.doneBtn}>완료</button>
            </div>
          </div>
          <div className={classes.contents_card}>
            <h2 className={classes.contents_title}>리액트 공부하기</h2>
            <p className={classes.contents_text}>리액트 기초를 공부해봅시다.</p>
            <div className={classes.btn}>
              <button className={classes.deleteBtn}>삭제하기</button>
              <button className={classes.doneBtn}>완료</button>
            </div>
          </div>
        </div>
      </section>

      {/* Done */}
      <section>
        <h2>Done 🎉</h2>
        <div className={classes.contents_box}>
          <div className={classes.contents_card}>
            <h2 className={classes.contents_title}>리액트 공부하기</h2>
            <p className={classes.contents_text}>리액트 기초를 공부해봅시다.</p>
            <div className={classes.btn}>
              <button className={classes.deleteBtn}>삭제하기</button>
              <button className={classes.doneBtn}>완료</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contents;
