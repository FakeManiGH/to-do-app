import 'bootstrap/dist/css/bootstrap.min.css' 
import TaskForm from './TaskForm'
import Task from './Task'
import { useState } from 'react'


function App() {
  // The tasks state is initialized with the tasks stored in the local storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];  // If there are no tasks in the local storage, return an empty array
    }
  });

  // Adds a new task to the tasks state
  const addTask = (id: number, task: string, date: string) => {
    setTasks((prevTasks: {id: number, task: string, date: string}[]) => {
      const newTasks = [...prevTasks, { id, task, date }];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return newTasks;
    });
  }

  // Edits an existing task in the tasks state
  const editTask = (taskIndex: number, newTask: {id: number, task: string, date: string}) => {
    setTasks((prevTasks: {id: number, task: string, date: string}[]) => {
      const newTasks = [...prevTasks];
      newTasks[taskIndex] = newTask;
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return newTasks;
    });
  };

  // Deletes a task from the tasks state
  const deleteTask = (taskIndex: number) => {
    setTasks((prevTasks: {id: number, task: string, date: string}[]) => {
      const newTasks = prevTasks.filter((_, index) => index !== taskIndex);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return newTasks;
    });
  };

  return (
    <>
      <h1 className="text-center mt-4 mb-4 fw-bold">TO-DO APP</h1>
      <p className="text-center mt-4 mb-4">Today is: <strong>{new Date().toLocaleDateString()}</strong></p>

      <TaskForm addTask={addTask} />
      <hr className='container' />
      
      <div className='container gap-2'>
        <h3 className='fw-bold'>MY TASKS</h3>
        {tasks.sort((a: { date: string; }, b: { date: string; }) => Date.parse(a.date) - Date.parse(b.date)).map((task: { id: number; task: string; date: string; }, index: number) => (
          <Task
            key={task.id}
            id={task.id}
            task={task.task}
            date={task.date}
            editTask={(newTask) => editTask(index, newTask)}
            deleteTask={() => deleteTask(index)}
          />
        ))}
      </div>
    </>
  );
}

export default App
