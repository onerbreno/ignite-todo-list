import { Header } from "./components/Header"
import { NewTaskBar } from "./components/NewTaskBar"
import './global.css'

import styles from './App.module.css'
import { TasksContainer } from "./components/TasksContainer"
import { useState } from "react"

interface Task {
  id: number;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleCreateTask(task: string) {
    const newTask = { id: task.length + 1, content: task, isCompleted: false }
    setTasks([...tasks, newTask])
  }

  function handleToggleTask(id: number) {
    setTasks(tasks.map(task => {
      return task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    }))
  }

  return (
    <>
      <Header />
    
      <main className={styles.wrapper}>
        <NewTaskBar onCreateTask={handleCreateTask}/>
        <TasksContainer 
          tasks={tasks} 
          onToggleTask={handleToggleTask}
        />
      </main>
    </>
  )
}

