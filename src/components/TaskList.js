import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, setTasks }) {

function onDelete(taskToDelete) {
  const deletedTask = tasks.filter(task => task.text !== taskToDelete.text ? true : false);
  setTasks(deletedTask)
}  
  return (
    <div className="tasks">
      {tasks.map(task => {
        return <Task onDelete={onDelete} key={uuid()} task={task} text={task.text} category={task.category} />
      })}
    </div>
  );
}

export default TaskList;
