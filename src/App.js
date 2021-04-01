import './App.css';
import Status from './components/Status';
import { useState, useEffect } from 'react';
import GetItDone from './images/getitdone.svg';
import GetIt from './images/getit.svg';
import InProgress from './images/inprogress.svg';
import Done from './images/done.svg';

function App() {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="App">
      <img className="getItDone-svg" src={GetItDone} />
      <main>
        <section>
          <Status
            image={GetIt}
            cssClass="GetIt"
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Backlog"
          />

          <Status
            image={InProgress}
            cssClass="InProgress"
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="In Progress"
          />

          <Status
            cssClass="GetIt"
            image={Done}
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Done"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
