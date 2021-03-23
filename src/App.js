import './App.css';
import Status from './components/Status';
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {}, []);

  function addEmptyTask(status) {
    const lastTask = tasks[tasks.length - 1];
    let newTaskId = 1;
    if (lastTask !== undefined) {
      newTaskId = lastTask.id + 1;
    }
    setTasks((tasks) => [
      ...tasks,
      {
        id: newTaskId,
        title: '',
        description: '',
        urgency: '',
        status: status,
      },
    ]);
  }

  function addTask(taskToAdd) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskToAdd.id;
    });
    let newTaskList = [...filteredTasks, taskToAdd];
    setTasks(newTaskList);
  }

  function deleteTask(taskId) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(filteredTasks);
  }

  function moveTask(id, newStatus) {

    let task = tasks.filter((task) => {
      return task.id === id;
    })[0];

    let filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    task.status = newStatus;

    let newTaskList = [...filteredTasks, task];

    setTasks(newTaskList);
  }

  function saveTasks(tasks) {}

  function loadTasks() {}

  return (
    <div>
      <h1>Handle Your Tasks</h1>
      <main>
        <section>
          <Status
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="new task"
          />
          <Status
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="in progress"
          />
          <Status
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="done"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
