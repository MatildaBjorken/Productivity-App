import { useState } from 'react';

function Task(props) {
  const { task, addTask, deleteTask, moveTask } = props;

  const [urencyLevel, setUrgencyLevel] = useState(task.urgency);
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [formAction, setFormAction] = useState('');

  return <div className="task"></div>;
}

export default Task;
