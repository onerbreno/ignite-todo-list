import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask"
import './global.css'

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
    
      <div className={styles.wrapper}>
        <NewTask />
        <main>
          <div>
            
          </div>
        </main>
      </div>
    </div>
  )
}

