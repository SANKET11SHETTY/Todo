import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import TodoList from "./components/TodoList";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const addHandler = () => {
    let newTask = [...mainTask, { title, desc }];
    setMainTask(newTask);
    setTitle("");
    setDesc("");
  };

  return (
    <>
      <Header />
      <div className="mainc">
        <div className="container">
          <div className="mb-3">
            <label htmlFor="task" className="form-label">
              Task
            </label>
            <input
              type="text"
              className="form-control"
              id="task"
              placeholder="Enter Task here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3 mt-4">
            <label htmlFor="descr" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="descr"
              placeholder="Enter Description here"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-success ms-5 btn1"
            onClick={addHandler}
          >
            <i className="bi bi-plus-square"></i>
          </button>
          <TodoList
            title={title}
            desc={desc}
            mainTask={mainTask}
            setMainTask={setMainTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
