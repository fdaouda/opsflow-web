import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  type Task = {
    title : string,
    status: string,
    priority: string
  };

  const task1: Task = {
    title : "Tache1",
    status : "OPEN",
    priority: "normal"
  };

  const tasks: Task[] = [
    {
      title: "tâche 1",
      status: "OPEN",
      priority: "normal"
    },
    {
      title: "tâche 2",
      status: "IN PROGRESS",
      priority: "normal"
    },
    {
      title: "tâche 3",
      status: "OPEN",
      priority: "URGENT"
    },
  ];



  return (
    <>
    <div>
      Opsflow test
    </div>
    <div>{task1.title} - {task1.status}</div>

    {tasks.map(task => 
      {
       return <div>{task.title} - statut : "{task.status}"</div>
      })
    }
    </>
  )
}

export default App
