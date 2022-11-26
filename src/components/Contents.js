import React from 'react';
import classes from './Contents.module.css';

const Contents = (props) => {
  //console.log("props", props)
  const isWorking = props.todosData.filter((work) => work.progress === true);
  const isDone = props.todosData.filter((work) => work.progress === false);
  console.log('isWorking', isWorking);
  console.log('isDone', isDone);

  return (
    <div className={classes.contents}>
      {/* working */}
      <section>
        <h2>Working 🔥</h2>
        <div className={classes.contents_box}>
          {isWorking.map((todo) => {
            return (
              <div key={todo.id} className={classes.contents_card}>
                <h2 className={classes.contents_title}>{todo.title}</h2>
                <p className={classes.contents_text}>{todo.contents}</p>
                <div className={classes.btn}>
                  <button
                    className={classes.deleteBtn}
                    onClick={() => props.onDeleteTdosData(todo.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className={classes.doneBtn}
                    onClick={() =>
                      props.onProgressState(todo.id, todo.progress)
                    }
                  >
                    완료
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Done */}
      <section>
        <h2>Done 🎉</h2>
        <div className={classes.contents_box}>
          {isDone.map((todo) => {
            return (
              <div key={todo.id} className={classes.contents_card}>
                <h2 className={classes.contents_title}>{todo.title}</h2>
                <p className={classes.contents_text}>{todo.contents}</p>
                <div className={classes.btn}>
                  <button
                    className={classes.deleteBtn}
                    onClick={() => props.onDeleteTdosData(todo.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className={classes.doneBtn}
                    onClick={() =>
                      props.onProgressState(todo.id, todo.progress)
                    }
                  >
                    취소
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Contents;
