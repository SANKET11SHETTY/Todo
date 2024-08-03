import React from "react";

const TodoList = ({ mainTask, title, desc, setMainTask }) => {
  const deleteHandler = (i) => {
    let delTask = [...mainTask];
    delTask.splice(i, 1);
    setMainTask(delTask);
  };
  return (
    <div className="task-list-main">
      {mainTask.map((e, i) => {
        return (
          <div className="task-list" key={i}>
            <h4>{e.title}</h4>
            <p>{e.desc}</p>
            <button
              type="button"
              className="btn btn-danger btn2"
              onClick={() => deleteHandler(i)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
