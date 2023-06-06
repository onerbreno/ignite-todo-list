import { Header } from "./components/Header"
import { NewTaskBar } from "./components/NewTaskBar"
import './global.css'

import styles from './App.module.css'
import { TasksContainer } from "./components/TasksContainer"

export function App() {
  return (
    <>
      <Header />
    
      <main className={styles.wrapper}>
        <NewTaskBar />
        <TasksContainer />
      </main>
    </>
  )
}

