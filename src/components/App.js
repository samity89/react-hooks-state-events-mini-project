import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  let tasksToDisplay = tasks.filter(task => {
    if (selectedCategory === "All") return true
    if (selectedCategory === task.category) return true
    return false
  })  
  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasksToDisplay} setTasks={setTasks}/>
    </div>
  );
}

export default App;
