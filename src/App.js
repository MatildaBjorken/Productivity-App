import './App.css';
import Status from './components/Status';
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  useEffect(() => {}, []);

  function addEmptyTask(status) {}

  function addTask(taskToAdd) {}

  function deleteTask(taskId) {}

  function moveTask(id, newStatus) {}

  function saveTasks(tasks) {}

  function loadTasks() {}

  return (
    <div>
      <h1>Handle Your Tasks</h1>
      <main>
        <section>
          <Status
            task={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="new task"
          />
          <Status
            task={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="in progress"
          />
          <Status
            task={tasks}
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
