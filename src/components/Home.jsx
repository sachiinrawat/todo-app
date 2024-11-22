import React, { useState } from "react";
import "./Home.css"; // Don't forget to import the CSS file
import Task from "./Task";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log(title);
  console.log(description);

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        title,
        description,
      },
    ]);
    setDescription("");
    setTitle("");
  };

  const deleteTask = (index) => {
    const filteredArray = tasks.filter((val, i) => {
      return i !== index;
    });
    setTasks(filteredArray);
  };

  return (
    <>
      <div className="container">
        <form className="form-container" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            className="input-field"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="textarea-field"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit" className="submit-button">
            ADD
          </button>
        </form>
      </div>
      {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </>
  );
};

export default Home;
